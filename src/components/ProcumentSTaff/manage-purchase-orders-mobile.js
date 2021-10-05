import React, { Component } from "react";

import ProcurementStaffDataSercice from "../../services/purchaseOrder.Service";
import Tutorial from "./manage-purchas-order-data.mobile";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../Navigations/Procument-StaffNav";
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

        SelectedItem1: data.SelectedItem1,
        SelectedItem2: data.SelectedItem2,
        SelectedItem3: data.SelectedItem3,
        SelectedItem4: data.SelectedItem4,
        SelectedItem5: data.SelectedItem5,
        SelectedProject: data.SelectedProject,
        ProjectCOde: data.ProjectCOde,
        RequestDate: data.RequestDate,
        RequiredBefore: data.RequiredBefore,
        Quantity1: data.Quantity1,
        Quantity2: data.Quantity2,
        Quantity3:data.Quantity3,
        Quantity4:data.Quantity4,
        Quantity5: data.Quantity5,
        Paid: data.Paid,
        Status: data.Status,
        Delivered:data.Delivered,
        ProjectCOde:data.ProjectCOde,
        RequestCode:data.RequestCode,
        SelectedSuplier:data.SelectedSuplier,
        Item5Price:data.Item5Price,
        Item4Price:data.Item4Price,
        Item3Price:data.Item3Price,
        Item2Price:data.Item2Price,
        Item1Price:data.Item1Price,
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
       
        <div className="container">
      
        <div className="col-md-8" style={{ marginTop: '10px', marginLeft: '180px' }}>
            
        <Header as='h2' icon textAlign='center'>
                  <Icon name='user' circular />
                  <Header.Content>Manage Purchase Orders</Header.Content>
                </Header>

          <h4> Purchase Orders</h4>

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
                  {tutorial.RequestCode}
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
              <p>Please Click On Purcahse Order To View...</p>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}
