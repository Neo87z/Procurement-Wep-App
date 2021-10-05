import React, { Component } from "react";
import TutorialDataService from "../../services/tutorial.service";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../Navigations/ManagementNav";
import SupliderDataService from "../../services/suplier.service";
export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChnageAccountNumber = this.onChnageAccountNumber.bind(this);
    this.newSuplier = this.newSuplier.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);

    this.state = {
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      SuplierName: e.target.value,
    })
  }

  onChangeAddress(e) {
    this.setState({
      SuplierAddress: e.target.value,
    })
  }
  onChangeContactNumber(e) {
    this.setState({
      SuplierContactNumber: e.target.value,
    })
  }
  onChnageAccountNumber(e) {
    this.setState({
      SuplierAccountNumber: e.target.value,
    })
  }
  saveTutorial() {
    let SuplierData = {
      SuplierName: this.state.SuplierName,
      SuplierAddress: this.state.SuplierAddress,
      SuplierContactNumber: this.state.SuplierContactNumber,
      SuplierAccountNumber: this.state.SuplierAccountNumber,
    }
    console.log("dataa", SuplierData);
    SupliderDataService.create(SuplierData)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newSuplier() {
    this.setState({
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      submitted:false,
    });
  }

  render() {
    return (
      <div class="pusher">
        <NavBar />
        <div className="container">

          {this.state.submitted ? (
            <div style={{ marginTop: '-900px' }}>
              <h4>Supplier Data Have Been Sucessfully Created!</h4>
              <button className="btn btn-success" onClick={this.newSuplier}>
                Add Another Supplier
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group" style={{ marginTop: '-900px' }}>
                <br></br>


                <Header as='h2' icon textAlign='center'>
                  <Icon name='user' circular />
                  <Header.Content>Add Supliers</Header.Content>
                </Header>


                <br></br>
                <label htmlFor="title">Suplier Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.SuplierName}
                  onChange={this.onChangeName}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Supplier Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SuplierAddress}
                  onChange={this.onChangeAddress}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supplier Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SuplierContactNumber}
                  onChange={this.onChangeContactNumber}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Supplier Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SuplierAccountNumber}
                  onChange={this.onChnageAccountNumber}
                  name="description"
                />
              </div>
            

              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
