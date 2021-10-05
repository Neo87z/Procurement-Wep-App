import React, { Component } from "react";
import SupliderDataService from "../../services/procumentstaff.service";
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
        EmployeeName:"",
        Username:"",
        EmailAddress:"",
        TempPassword: "",
        ConactNumber: "",
        Username:"",
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
    const Username = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          Username: Username,
        },
      };
    });
  }


  onChangeTitle(e) {
    const EmployeeName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          EmployeeName: EmployeeName,
        },
      };
    });
  }

  onChangeAccoutNumber(e) {
    const ConactNumber = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ConactNumber: ConactNumber,
        },
      };
    });
  }

  onChangeDescription(e) {
    const TempPassword = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        TempPassword: TempPassword,
      },
    }));
  }
  onChangeAddress(e) {
    const EmailAddress = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        EmailAddress: EmailAddress,
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
      EmployeeName: this.state.currentTutorial.EmployeeName,
      Username: this.state.currentTutorial.Username,
      EmailAddress: this.state.currentTutorial.EmailAddress,
      TempPassword:this.state.currentTutorial.TempPassword,
      ConactNumber:this.state.currentTutorial.ConactNumber,
    }
    SupliderDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "Prucment Staff Data Sucessfully Updated",
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
                <label htmlFor="title">Procurement Staff Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.EmployeeName}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.Username}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.TempPassword}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.EmailAddress}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.ConactNumber}
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
