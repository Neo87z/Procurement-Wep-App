import React, { Component } from "react";

import SuplierDataSevice from "../../services/suplier.service";
import ItemDataSerice from "../../services/item.service";
import ProjectData from "../../services/projec.service";
import PurcahseOrderData from "../../services/purchaseOrder.Service";
import Tutorial from "../../services/suplier.service";
import { Multiselect } from 'multiselect-react-dropdown';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../Navigations/Procument-StaffNav";
export default class TutorialsList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        this.onSiteMangerData = this.onSiteMangerData.bind(this);
        this.onProcumentDatChange = this.onProcumentDatChange.bind(this);
        this.onSelectSuplier = this.onSelectSuplier.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.onSelectProcumentStaff = this.onSelectProcumentStaff.bind(this);
        this.onSleectSiteManger = this.onSleectSiteManger.bind(this);
        this.newSuplier = this.newSuplier.bind(this);
        this.onChangeprojectID = this.onChangeprojectID.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeSiteName = this.onChangeSiteName.bind(this);
        this.onChangeSiteLoction = this.onChangeSiteLoction.bind(this);
        this.OnItemSelect1 = this.OnItemSelect1.bind(this);
        this.OnItemSelect2 = this.OnItemSelect2.bind(this);
        this.OnItemSelect3 = this.OnItemSelect3.bind(this);
        this.OnItemSelect4 = this.OnItemSelect4.bind(this);
        this.OnItemSelect5 = this.OnItemSelect5.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeProjectCOde = this.onChangeProjectCOde.bind(this);
        this.onChangeRequestDate = this.onChangeRequestDate.bind(this);
        this.onBefeDate = this.onBefeDate.bind(this);
        this.onChangeQuantity1 = this.onChangeQuantity1.bind(this);
        this.onChangeQuantity2 = this.onChangeQuantity2.bind(this);
        this.onChangeQuantity3 = this.onChangeQuantity3.bind(this);
        this.onChangeQuantity4 = this.onChangeQuantity4.bind(this);
        this.onChangeQuantity5 = this.onChangeQuantity5.bind(this);
        this.onChangeRequestCode = this.onChangeRequestCode.bind(this);

        
        this.state = {
            items: [],
            tutorials: [],
            ProcmentStaff: [],
            SiteManger: [],
            Projects: [],
            currentTutorial: null,
            currentIndex: -1,
            SelectedSuplier: '',
            SelectedProcumentStaff: '',
            SelectedSiteManager: '',
            projectID: '',
            ProjectName: '',
            SiteName: '',
            SiteLocation: '',
            Budget: '',
            submitted: false,
            SelectedProject: '',
            SelectedItem1: '',
            SelectedItem2: '',
            SeletcedItem3: '',
            SelectedItem4: '',
            SeletcedItem5: '',
            ProjectCOde: '',
            RequestDate: '',
            RequiredBefore: '',
            Quantity1: '',
            Quantity2: '',
            Quantity3: '',
            Quantity4: '',
            Quantity5: '',
            RequestCode:'',
            Item1Price:0,
            Item2Price:0,
            Item3Price:0,
            Item4Price:0,
            Item5Price:0,
        };
    }

    onChangeRequestCode(e) {
        this.setState({
            RequestCode: e.target.value,
        })
    }
    onChangeQuantity1(e) {
        this.setState({
            Quantity1: e.target.value,
        })
    }

    onChangeQuantity2(e) {
        this.setState({
            Quantity2: e.target.value,
        })
    }

    onChangeQuantity3(e) {
        this.setState({
            Quantity3: e.target.value,
        })
    }

    onChangeQuantity4(e) {
        this.setState({
            Quantity4: e.target.value,
        })
    }

    onChangeQuantity5(e) {
        this.setState({
            Quantity5: e.target.value,
        })
    }


    onChangeProjectCOde(e) {
        this.setState({
            ProjectCOde: e.target.value,
        })
    }

    onChangeRequestDate(e) {
        this.setState({
            RequestDate: e.target.value,
        })
    }

    onBefeDate(e) {
        this.setState({
            RequiredBefore: e.target.value,
        })
    }
    OnItemSelect1(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedItem1: selectedItem.ItemCode
        })
        this.setState({
            Item1Price: selectedItem.ItemPrice
        })
        console.log("ythis is suolaier", this.state.SelectedItem1)
    }

    OnItemSelect2(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedItem2: selectedItem.ItemCode
        })
        this.setState({
            Item2Price: selectedItem.ItemPrice
        })
        console.log("ythis is suolaier", this.state.SelectedItem2)
    }


    OnItemSelect3(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedItem3: selectedItem.ItemCode
        })
        this.setState({
            Item3Price: selectedItem.ItemPrice
        })
        console.log("ythis is suolaier", this.state.SelectedItem3)
    }


    OnItemSelect4(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedItem4: selectedItem.ItemCode
        })
        this.setState({
            Item4Price: selectedItem.ItemPrice
        })
        console.log("ythis is suolaier", this.state.SelectedItem4)
    }


    OnItemSelect5(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedItem5: selectedItem.ItemCode
        })
        this.setState({
            Item5Price: selectedItem.ItemPrice
        })
        console.log("ythis is suolaier", this.state.SelectedItem5)
    }


    newSuplier() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
            SelectedSuplier: '',
            SelectedProcumentStaff: '',
            SelectedSiteManager: '',
            projectID: '',
            ProjectName: '',
            SiteName: '',
            SiteLocation: '',
            Budget: '',
            submitted: false,
            SelectedProject: '',
            SelectedItem1: '',
            SelectedItem2: '',
            SeletcedItem3: '',
            SelectedItem4: '',
            SeletcedItem5: '',
            ProjectCOde: '',
            RequestDate: '',
            RequiredBefore: '',
            Quantity1: '',
            Quantity2: '',
            Quantity3: '',
            Quantity4: '',
            Quantity5: '',
            submitted: false,
            SelectedSuplier:'',
            RequestCode:this.state.RequestCode,
            Item5Price:0,
            Item4Price:0,
            Item3Price:0,
            Item3Price:0,
            Item2Price:0,
            Item1Price:0,
        });
    }

    onChangeprojectID(e) {
        this.setState({
            projectID: e.target.value,
        })
    }
    onChangeProjectName(e) {
        this.setState({
            ProjectName: e.target.value,
        })
    }

    onChangeSiteName(e) {
        this.setState({
            SiteName: e.target.value,
        })
    }
    onChangeSiteLoction(e) {
        this.setState({
            SiteLocation: e.target.value,
        })
    }
    onChangeBudget(e) {
        this.setState({
            Budget: e.target.value,
        })
    }


    saveTutorial() {

        let PurchaseOrder = {
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
            SelectedSuplier:this.state.SelectedSuplier,
            Paid: false,
            Status: false,
            Delivered: 'No',
            RequestCode:this.state.RequestCode,
            Item5Price:this.state.Item5Price,
            Item4Price:this.state.Item4Price,
            Item3Price:this.state.Item3Price,
            Item2Price:this.state.Item2Price,
            Item1Price:this.state.Item1Price,
        }
        PurcahseOrderData.create(PurchaseOrder)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
        console.log(PurchaseOrder)

        console.log("Purcahse Log", PurchaseOrder);

    }

    onSelectSuplier(selectedList, selectedItem) {
        console.log(selectedItem);
        this.setState({
            SelectedSuplier: selectedItem.SupName
        })
        console.log("ythis is suolaier", this.state.SelectedSuplier)
    }
    onSelectProcumentStaff(selectedList, selectedItem) {
        console.log(selectedItem.projectID);
        this.setState({
            SelectedProject: selectedItem.projectID
        })
        console.log("ythis is suolaier", this.state.SelectedProject)
    }
    onSleectSiteManger(selectedList, selectedItem) {
        console.log(selectedItem.EmployeeName);
        this.setState({
            SelectedSiteManager: selectedItem.EmployeeName
        })
        console.log("ythis is suolaier", this.state.SelectedSiteManager)
    }


    componentDidMount() {

        SuplierDataSevice.getAll().on("value", this.onDataChange);
        ProjectData.getAll().on("value", this.onProcumentDatChange);
        ItemDataSerice.getAll().on("value", this.onSiteMangerData);
        console.log("hi2");


    }

    componentWillUnmount() {
        SuplierDataSevice.getAll().off("value", this.onDataChange);
        console.log("h3");

    }

    onDataChange(items) {
        let tutorials = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            tutorials.push({
                key: key,
                SupName: data.SuplierName,
                SupContactNumber: data.SuplierContactNumber,
                SupAddress: data.SuplierAddress,
                SupAccountNumber: data.SuplierAccountNumber,
            });
        });

        this.setState({
            tutorials: tutorials,
        }); console.log("hi");


    }
    onProcumentDatChange(items) {
        console.log("hixxxx");
        let tutorials = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            tutorials.push({
                key: key,
                SelectedSuplier: data.SelectedSuplier,
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
            Projects: tutorials,
        });
    }
    onSiteMangerData(items) {
        console.log("hixxxx");
        let tutorials = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            tutorials.push({
                key: key,
                ItemCode: data.ItemCode,
                ItemName: data.ItemName,
                ItemDescription: data.ItemDescription,
                ItemPrice: data.ItemPrice,
            });
        });

        this.setState({
            items: tutorials,
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
        SuplierDataSevice.deleteAll()
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

                    {this.state.submitted ? (
                        <div style={{ marginTop: '-900px' }}>
                            <h4>Project Have Been Sucessfully Created!</h4>
                            <button className="btn btn-success" onClick={this.newSuplier}>
                                Create Another Project
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group" style={{ marginTop: '-900px' }}>
                                <br></br>


                                <Header as='h2' icon textAlign='center'>
                                    <Icon name='user' circular />
                                    <Header.Content>Add New Project</Header.Content>
                                </Header>


                                <br></br>
                                <label htmlFor="title">Request CODE</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.RequestCode}
                                    onChange={this.onChangeRequestCode}
                                    name="title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Project ID</label>
                                <Multiselect
                                    options={this.state.Projects}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="projectID"
                                    value={this.state.selectedValue}
                                    onSelect={this.onSelectProcumentStaff}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Request Date</label>
                                <input
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
                                    onChange={this.onBefeDate}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Project Supplier</label>
                                <Multiselect
                                    options={this.state.tutorials}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="SupName"
                                    value={this.state.selectedValue}
                                    onSelect={this.onSelectSuplier}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Item 1</label>
                                <Multiselect
                                    options={this.state.items}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="ItemCode"
                                    value={this.state.selectedValue}
                                    onSelect={this.OnItemSelect1}
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
                                    onChange={this.onChangeQuantity1}
                                    name="description"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Item 2</label>
                                <Multiselect
                                    options={this.state.items}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="ItemCode"
                                    value={this.state.selectedValue}
                                    onSelect={this.OnItemSelect2}
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
                                    onChange={this.onChangeQuantity2}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Item 3</label>
                                <Multiselect
                                    options={this.state.items}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="ItemCode"
                                    value={this.state.selectedValue}
                                    onSelect={this.OnItemSelect3}
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
                                    onChange={this.onChangeQuantity3}
                                    name="description"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Item 4</label>
                                <Multiselect
                                    options={this.state.items}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="ItemCode"
                                    value={this.state.selectedValue}
                                    onSelect={this.OnItemSelect4}
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
                                    onChange={this.onChangeQuantity4}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Item 5</label>
                                <Multiselect
                                    options={this.state.items}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="ItemCode"
                                    value={this.state.selectedValue}
                                    onSelect={this.OnItemSelect5}
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
                                    onChange={this.onChangeQuantity5}
                                    name="description"
                                />
                            </div>

                            <button onClick={this.saveTutorial} className="btn btn-success">
                                Submit
                            </button> <br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br>  
                        </div>
                       
                    )}

                </div>
            </div>
        );
    }
}
