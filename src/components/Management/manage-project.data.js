import React, { Component } from "react";
import SupliderDataService from "../../services/projec.service";
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
    this.onChangeSuplier = this.onChangeSuplier.bind(this);
    this.onChangeSiteManer = this.onChangeSiteManer.bind(this);
    this.onChnagePRocumentStaff = this.onChnagePRocumentStaff.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        SelectedSuplier:"",
        SelectedProcumentStaff: "",
        SelectedSiteManager:"",
        projectID: "",
        ProjectName:"",
        SiteName: "",
        SiteLocation:"",
        Budget: "",
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
    const ProjectName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ProjectName: ProjectName,
        },
      };
    });
  }


  onChangeTitle(e) {
    const projectID = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          projectID: projectID,
        },
      };
    });
  }

  onChangeAccoutNumber(e) {
    const SiteLocation = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          SiteLocation: SiteLocation,
        },
      };
    });
  }

  onChangeDescription(e) {
    const Budget = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Budget: Budget,
      },
    }));
  }
  onChangeAddress(e) {
    const SiteName = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SiteName: SiteName,
      },
    }));
  }
  onChangeSuplier(e) {
    const SelectedSuplier = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SelectedSuplier: SelectedSuplier,
      },
    }));
  }
  onChangeSiteManer(e) {
    const SelectedSiteManager = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SelectedSiteManager: SelectedSiteManager,
      },
    }));
  }

  onChnagePRocumentStaff(e) {
    const SelectedProcumentStaff = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        SelectedProcumentStaff: SelectedProcumentStaff,
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
    let Project = {
      SelectedSuplier: this.state.SelectedSuplier,
      SelectedProcumentStaff: this.state.SelectedProcumentStaff,
      SelectedSiteManager: this.state.SelectedSiteManager,
      projectID: this.state.projectID,
      ProjectName: this.state.ProjectName,
      SiteName: this.state.SiteName,
      SiteLocation: this.state.SiteLocation,
      Budget: this.state.Budget,
  }

    SupliderDataService.update(this.state.currentTutorial.key, Project)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
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
        <h4>Manage Project</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Project ID</label>
                <input
                disabled
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.projectID}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.ProjectName}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Budget</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.Budget}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Site Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SiteName}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Site Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SiteLocation}
                  onChange={this.onChangeAccoutNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supliers</label>
                <input
                disabled
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SelectedSuplier}
                  onChange={this.onChangeSuplier}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Site Mangers</label>
                <input
                disabled
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SelectedSiteManager}
                  onChange={this.onChangeSiteManer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Prociment Staff</label>
                <input
                disabled
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.SelectedProcumentStaff}
                  onChange={this.onChnagePRocumentStaff}
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
            <p>{this.state.message}</p>
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
