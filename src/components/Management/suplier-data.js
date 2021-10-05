import React, { Component } from "react";
import SupliderDataService from "../../services/suplier.service";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAccoutNumber = this.onChangeAccoutNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        SupName: "",
        SupContactNumber:"",
        SupAddress:"",
        SupAccountNumber:"",
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeTitle(e) {
    const SupName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          SupName: SupName,
        },
      };
    });
  }

  onChangeAccoutNumber(e) {
    const SupAccountNumber = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          SupAccountNumber: SupAccountNumber,
        },
      };
    });
  }

  onChangeDescription(e) {
    const SupContactNumber = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SupContactNumber: SupContactNumber,
      },
    }));
  }
  onChangeAddress(e) {
    const SupAddress = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SupAddress: SupAddress,
      },
    }));
  }

  updatePublished(status) {
    SupliderDataService.update(this.state.currentTutorial.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
  
    let data = {
      SuplierName: this.state.currentTutorial.SupName,
      SuplierAddress: this.state.currentTutorial.SupAddress,
      SuplierContactNumber: this.state.currentTutorial.SupContactNumber,
      SuplierAccountNumber: this.state.currentTutorial.SupAccountNumber,
    }
    SupliderDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "Supplier Data Sucesfully Changed",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    SupliderDataService.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        <h4>Suplier Data</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Supplier Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.SupName}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supplier Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SupContactNumber}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supplier Contact Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SupAddress}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supplier Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SupAccountNumber}
                  onChange={this.onChangeAccoutNumber}
                />
              </div>

          
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
           <center><h3> <strong>{this.state.message}</strong></h3></center>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Supplier To View Data...</p>
          </div>
        )}
      </div>
    );
  }
}
