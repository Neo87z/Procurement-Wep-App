import React, { Component } from "react";
import SupliderDataService from "../../services/projec.service";
import PurchaeOrderORdaData from "../../services/purchaseOrder.Service";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { Multiselect } from 'multiselect-react-dropdown';
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
    this.onChangeRequestBefore = this.onChangeRequestBefore.bind(this);
    this.UpdateDelivery = this.UpdateDelivery.bind(this);

    
    this.onChnageItem1 = this.onChnageItem1.bind(this);
    this.onChnageItem2 = this.onChnageItem2.bind(this);
    this.onChnageItem3 = this.onChnageItem3.bind(this);
    this.onChnageItem4 = this.onChnageItem4.bind(this);
    this.onChnageItem5 = this.onChnageItem5.bind(this);
    this.ChangeStatus = this.ChangeStatus.bind(this);
    this.onCaribelChnage = this.onCaribelChnage.bind(this);
    this.UpdatePay = this.UpdatePay.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        SelectedItem1: "",
        SelectedItem2: "",
        SelectedItem3: "",
        SelectedItem4: "",
        SelectedItem5: "",
        SelectedProject: "",
        ProjectCOde: "",
        RequestDate: "",
        RequiredBefore: "",
        Quantity1: "",
        Quantity2: "",
        Quantity3: "",
        Quantity4: "",
        Quantity5: '',
        Paid: '',
        Status: '',
        Delivered: '',
        RequestCode: '',
        SelectedSuplier: '',
        published: false,
        Item5Price: '',
        Item4Price: '',
        Item3Price: '',
        Item2Price: '',
        Item1Price: '',
        TotalCost: '',
      },
      message: "",
    };
  }


  ChangeStatus() {
    let TotalCost = 0;
    TotalCost = parseInt(this.state.currentTutorial.Quantity1) * parseInt(this.state.currentTutorial.Item1Price) + parseInt(this.state.currentTutorial.Quantity2) * parseInt(this.state.currentTutorial.Item2Price) + parseInt(this.state.currentTutorial.Quantity3) * parseInt(this.state.currentTutorial.Item3Price) + parseInt(this.state.currentTutorial.Quantity4) * parseInt(this.state.currentTutorial.Item4Price) + parseInt(this.state.currentTutorial.Quantity5) * parseInt(this.state.currentTutorial.Item5Price)
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          TotalCost: TotalCost,
        },
      };
    });
  }
  onCaribelChnage() {
    let TotalCost2 = 0;
    console.log("done")
    TotalCost2 = parseInt(this.state.currentTutorial.Quantity1) * parseInt(this.state.currentTutorial.Item1Price) + parseInt(this.state.currentTutorial.Quantity2) * parseInt(this.state.currentTutorial.Item2Price) + parseInt(this.state.currentTutorial.Quantity3) * parseInt(this.state.currentTutorial.Item3Price) + parseInt(this.state.currentTutorial.Quantity4) * parseInt(this.state.currentTutorial.Item4Price) + parseInt(this.state.currentTutorial.Quantity5) * parseInt(this.state.currentTutorial.Item5Price)
    this.setState({
      currentTutorial: {
        TotalCost: TotalCost2,
      },
    });
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
    this.ChangeStatus();
  }
  onChangeUserName(e) {
    const ProjectCOde = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ProjectCOde: ProjectCOde,
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
  onChangeRequestBefore(e) {
    const RequiredBefore = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        RequiredBefore: RequiredBefore,
      },
    }));

  }

  onChnageItem1(e) {
    const SelectedItem1 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Quantity1: SelectedItem1,
      },

    }));

  }

  onChnageItem2(e) {
    const SelectedItem2 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Quantity2: SelectedItem2,
      },
    }));

  }
  onChnageItem3(e) {
    const SelectedItem3 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Quantity3: SelectedItem3,
      },
    }));

  }
  onChnageItem4(e) {
    const SelectedItem4 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Quantity4: SelectedItem4,
      },
    }));

  }
  onChnageItem5(e) {
    const SelectedItem5 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Quantity5: SelectedItem5
      },
    }));

  }






  updatePublished(status) {
    PurchaeOrderORdaData.update(this.state.currentTutorial.key, {
      Status: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            Status: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  UpdatePay(status) {
    alert('Invoice Has Been Sent To the Acontatnt')
    PurchaeOrderORdaData.update(this.state.currentTutorial.key, {
      Paid: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            Paid: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  UpdateDelivery(status) {
    alert('Purchase Order Has Benn Updated Has Delivered')
    PurchaeOrderORdaData.update(this.state.currentTutorial.key, {
      Delivered: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            Delivered: status,
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
      SelectedItem1: this.state.SelectedItem1,
      SelectedItem2: this.state.SelectedItem2,
      SelectedItem3: this.state.SelectedItem3,
      SelectedItem4: this.state.SelectedItem4,
      SelectedItem5: this.state.SelectedItem5,
      ProjectCOde: this.state.ProjectCOde,
      RequestDate: this.state.RequestDate,
      RequiredBefore: this.state.RequiredBefore,
      Quantity1: this.state.Quantity1,
      Quantity2: this.state.Quantity2,
      Quantity3: this.state.Quantity3,
      Quantity4: this.state.Quantity4,
      Quantity5: this.state.Quantity5,
      SelectedSuplier: this.state.SelectedSuplier,
      RequestCode: this.state.RequestCode,
      Item5Price: this.state.Item5Price,
      Item4Price: this.state.Item4Price,
      Item3Price: this.state.Item3Price,
      Item2Price: this.state.Item2Price,
      Item1Price: this.state.Item1Price,
    }

    PurchaeOrderORdaData.update(this.state.currentTutorial.key, Project)
      .then(() => {
        this.setState({
          message: "Purchase Order Sucessfully Updated!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    PurchaeOrderORdaData.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  SendMessage() {
    alert('Suplier Has Been Sucessfully Notified');
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
                <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                  {currentTutorial.Status ? "Approved" : "Declined"}
                </div>
                <div className="form-group">
                  <label>
                    <strong>Delivery Status:</strong>
                  </label>
                  {currentTutorial.Delivered ? "Sucessfuly Delivered" : "Not Yet Delivered"}
                </div>

                <div className="form-group">
                  <label>
                    <strong>Paid The Suplier:</strong>
                  </label>
                  {currentTutorial.Paid ? "Paid" : "Not Yet Paid"}
                </div>
                <div className="form-group">
                  <label>
                    <strong>Total Cost:</strong>
                  </label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.TotalCost}
                    onChange={this.onChangeUserName}
                    name="title"
                  />
                </div>
                <label htmlFor="title">Request CODE</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.RequestCode}
                  onChange={this.onChangeUserName}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Project ID</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.ProjectCOde}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Request Date</label>
                <input
                  disabled
                  type="date"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.RequestDate}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Required Before</label>
                <input
                  type="date"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.RequiredBefore}
                  onChange={this.onChangeRequestBefore}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Suplier</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedSuplier}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 1</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedItem1}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 1 Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.Quantity1}
                  onChange={this.onChnageItem1}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Item 2</label>
                <input
                  disabled
                  type="text "
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedItem2}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Item 2 Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.Quantity2}
                  onChange={this.onChnageItem2}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 3</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedItem3}
                  onChange={this.onChnageItem1}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Item 3 Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.Quantity3}
                  onChange={this.onChnageItem3}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Item 4</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedItem4}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 4 Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.Quantity4}
                  onChange={this.onChnageItem4}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 5</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.SelectedItem5}
                  onChange={this.onChangeRequestDate}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Item 5 Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.Quantity5}
                  onChange={this.onChnageItem5}
                  name="description"
                />
              </div>

            </form>
            {currentTutorial.Status ? (
              <><><button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                Decline
              </button><button
                className="badge badge-primary mr-2"
                onClick={() => this.SendMessage()}
              >
                  {currentTutorial.Paid}
                  Send Suplier A Message
                </button></></>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Approve
              </button>


            )}

            {currentTutorial.Status ? (
              <>  {currentTutorial.Paid ? (
                <></>
              ) : (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.UpdatePay(true)}
                >
                  Pay Suplier
                </button>
              )}</>

            ) : (
              <></>


            )}


            {currentTutorial.Status ? (
              <>  {currentTutorial.Delivered ? (
                <>
                 <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.UpdateDelivery(false)}
                >
                  Mark As Not Deliverd
                </button></>
              ) : (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.UpdateDelivery(true)}
                >
                  Mark As Delivered
                </button>
              )}</>
            ) : (
              <></>


            )}
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
        <br></br><br></br><br></br><br></br>
      </div>
    );
  }
}
