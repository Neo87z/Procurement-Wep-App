import React, { Component } from "react";
import SupliderDataService from "../../services/item.service";
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
        ItemCode:"",
        ItemName: "",
        ItemDescription: "",
        ItemPrice: "",
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
    const ItemName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ItemName: ItemName,
        },
      };
    });
  }


  onChangeTitle(e) {
    const ItemCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ItemCode: ItemCode,
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
    const ItemDescription = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        ItemDescription: ItemDescription,
      },
    }));
  }
  onChangeAddress(e) {
    const ItemPrice = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        ItemPrice: ItemPrice,
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
    let Item = {
      ItemCode: this.state.ItemCode,
      ItemName: this.state.ItemName,
      ItemDescription: this.state.ItemDescription,
      ItemPrice: this.state.ItemPrice,
    }
    SupliderDataService.update(this.state.currentTutorial.key, Item)
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
        <h4>Item Data</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Item Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.ItemCode}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.ItemName}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.ItemDescription}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.ItemPrice}
                  onChange={this.onChangeAddress}
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
