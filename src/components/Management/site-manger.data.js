import React, { Component } from "react";
import SupliderDataService from "../../services/site-manager.service";
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
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        empname:"",
        user:"",
        mail:"",
        pass: "",
        phone: "",
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
  onChangeUserName(e) {
    const user = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          user: user,
        },
      };
    });
  }


  onChangeTitle(e) {
    const empname = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          empname: empname,
        },
      };
    });
  }

  onChangeAccoutNumber(e) {
    const phone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          phone: phone,
        },
      };
    });
  }

  onChangeDescription(e) {
    const pass = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pass: pass,
      },
    }));
  }
  onChangeAddress(e) {
    const mail = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        mail: mail,
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
      empname: this.state.currentTutorial.empname,
      user: this.state.currentTutorial.user,
      mail: this.state.currentTutorial.mail,
      pass:this.state.currentTutorial.pass,
      phone:this.state.currentTutorial.phone,
    }
    SupliderDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message:"Site Manager Details Sucessfully Updated",
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
        <h4>Site Manger Data</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Site Manger Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.empname}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.user}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.pass}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.mail}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.phone}
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
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
