import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      published: false
    };

    TutorialDataService.create(data)
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

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        <body>
        <div class ="ui visible sidebar inverted vertical menu">
        <a class ="item">
        <Image style={{ height: '200px' }} src="https://newsroom.hilton.com/assets/DBTR/images/logos/DoubleTree-Logo-White_HR.png" />

        </a>
        <a class ="item">
        Menu
        <a class ="item" href="/room">
        Rooms
        </a>
        <a class ="item" href="/reserve">
        Make Reservations
        </a>
        <a class ="item" href="/myReservations">
        My Reservations
        </a>
        <a class ="item" href="/ViewActivites">
        View Activities
        </a>
        <a class ="item" href="/AddRefund">
        Refunds
        </a>
        <a class ="item" href="/AddFeedBack">
        Contact
        </a>
        </a>
        <a class ="item" href="/profile">
        Profile
        </a>
        <a class ="item" href="/login" >
        Logout
        </a>
        <a class ="item" href="/viewRooms">
        Switch To Admin
        </a>
        </div>
        </body>
      </div>
    );
  }
}
