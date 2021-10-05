import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'



import AddNewSuplier from "./components/Management/add-new-supplier";
import AddNewProcumentStaff from "./components/Management/add-new-procument-staff";
import AddNewSiteManger from "./components/Management/add-new-site-mangers";
import ManageSuppliers from "./components/Management/manage-suplier";
import ManageProcumentStaff from "./components/Management/manage-procument-staff";
import ManageSiteManager from "./components/Management/manage-sitemanger";
import AddNewProject from "./components/Management/add-new-project";
import ManageProject from "./components/Management/manage-project";
import AddItem from "./components/ProcumentSTaff/add-new-item";
import ManageItem from "./components/ProcumentSTaff/manage-items";
import CreatePurchaseOrder from "./components/ProcumentSTaff/create-purchase-order";
import ManagePurchaseOrder from "./components/ProcumentSTaff/manage-purchase-orders";
import MobileVIewCreatePurcahse from "./components/ProcumentSTaff/create-purchase-order-mobile";
import manegPur from "./components/ProcumentSTaff/manage-purchase-orders-mobile";


class App extends Component {
  render() {
    return (
      <div>
        <Switch>    
          <Route exact path={["/", "/add-new-suplier"]}  component={AddNewSuplier} />
          <Route exact path="/add-new-procument-staff" component={AddNewProcumentStaff} />
          <Route exact path="/add-new-site-manger" component={AddNewSiteManger} />
          <Route exact path="/manager-supliers" component={ManageSuppliers} />
          <Route exact path="/manager-procument-staff" component={ManageProcumentStaff} />
          <Route exact path="/manage-site-managers" component={ManageSiteManager} />
          <Route exact path="/add-new-project" component={AddNewProject} />
          <Route exact path="/manage-projects" component={ManageProject} />
          <Route exact path="/add-item" component={AddItem} />
          <Route exact path="/manage-items" component={ManageItem} />
          <Route exact path="/create-purchaese-order" component={CreatePurchaseOrder} />
          <Route exact path="/manage-purchaese-order" component={ManagePurchaseOrder} />
          <Route exact path="/mobileview-create-purchase-order" component={MobileVIewCreatePurcahse} />
          <Route exact path="/mobileview-manage-purchase-order" component={manegPur} />
        </Switch>
      </div>
      

    );
  }
}

export default App;
