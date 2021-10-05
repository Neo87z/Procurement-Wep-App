import React, { Component } from "react";
import TutorialDataService from "../../services/tutorial.service";
import SuplierDataSevice from "../../services/suplier.service";
import SitEmangerData from "../../services/site-manager.service";
import ProucumentData from "../../services/procumentstaff.service";
import ProjectData from "../../services/projec.service";
import Tutorial from "./suplier-data";
import { Multiselect } from 'multiselect-react-dropdown';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../Navigations/ManagementNav";
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
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.state = {
            tutorials: [],
            ProcmentStaff: [],
            SiteManger: [],
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

        };
    }
    newSuplier() {
        this.setState({
            projectID: '',
            ProjectName: '',
            SiteName: '',
            SiteLocation: '',
            Budget: '',
            submitted: false,
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

        ProjectData.create(Project)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
        console.log(Project)
    }

    onSelectSuplier(selectedList, selectedItem) {
        console.log(selectedItem.SupName);
        this.setState({
            SelectedSuplier: selectedItem.SupName
        })
        console.log("ythis is suolaier", this.state.SelectedSuplier)
    }
    onSelectProcumentStaff(selectedList, selectedItem) {
        console.log(selectedItem.SupName);
        this.setState({
            SelectedProcumentStaff: selectedItem.EmployeeName
        })
        console.log("ythis is suolaier", this.state.SelectedProcumentStaff)
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
        console.log("hi2");
        SitEmangerData.getAll().on("value", this.onSiteMangerData);
        ProucumentData.getAll().on("value", this.onProcumentDatChange);
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
                EmployeeName: data.EmployeeName,
                Username: data.Username,
                EmailAddress: data.EmailAddress,
                TempPassword: data.TempPassword,
                ConactNumber: data.ConactNumber,
            });
        });

        this.setState({
            ProcmentStaff: tutorials,
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
                EmployeeName: data.EmployeeName,
                Username: data.Username,
                EmailAddress: data.EmailAddress,
                TempPassword: data.TempPassword,
                ConactNumber: data.ConactNumber,
            });
        });

        this.setState({
            SiteManger: tutorials,
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
                                <label htmlFor="title">Project ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.projectID}
                                    onChange={this.onChangeprojectID}
                                    name="title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Project Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.ProjectName}
                                    onChange={this.onChangeProjectName}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Site Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.SiteName}
                                    onChange={this.onChangeSiteName}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Site Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.SiteLocation}
                                    onChange={this.onChangeSiteLoction}
                                    name="description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Budget</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.Budget}
                                    onChange={this.onChangeBudget}
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
                                <label htmlFor="description">Procurement Staff</label>
                                <Multiselect
                                    options={this.state.ProcmentStaff}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="EmployeeName"
                                    value={this.state.selectedValue}
                                    onSelect={this.onSelectProcumentStaff}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Site Manager</label>
                                <Multiselect
                                    options={this.state.SiteManger}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="EmployeeName"
                                    value={this.state.selectedValue}
                                    onSelect={this.onSleectSiteManger}
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
