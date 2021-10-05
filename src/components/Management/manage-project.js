import React, { Component } from "react";

import ProcurementStaffDataSercice from "../../services/projec.service";
import Tutorial from "./manage-project.data";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../Navigations/ManagementNav";
export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {

    ProcurementStaffDataSercice.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    ProcurementStaffDataSercice.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        key: key,
        SelectedSuplier:data.SelectedSuplier,
        SelectedProcumentStaff: data.SelectedProcumentStaff,
        SelectedSiteManager: data.SelectedSiteManager,
        projectID: data.projectID,
        ProjectName: data.ProjectName,
        SiteName: data.SiteName,
        SiteLocation: data.SiteLocation,
        Budget: data.Budget,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    ProcurementStaffDataSercice.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;
    return (
        <div class="pusher">
         <NavBar />
        <div className="container">
      
        <div className="col-md-8" style={{ marginTop: '-900px', marginLeft: '250px' }}>
            
        <Header as='h2' icon textAlign='center'>
                  <Icon name='user' circular />
                  <Header.Content>Manage Project</Header.Content>
                </Header>

          <h4> Project List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.ProjectName}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-10" style={{ marginLeft: '150px' }}>
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please Click On A Project To View Data...</p>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}
