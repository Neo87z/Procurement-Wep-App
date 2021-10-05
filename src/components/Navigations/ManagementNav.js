import React, { Component } from "react";

import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
export default class AddTutorial extends Component {


    render() {
        return (
            <div >
                <body>
                    <div class="ui visible sidebar inverted vertical menu">
                        <a class="item">
                            <Image style={{ height: '200px' }} src="https://newsroom.hilton.com/assets/DBTR/images/logos/DoubleTree-Logo-White_HR.png" />

                        </a>
                        <a class="item">
                            Menu
                            <a class="item">
                                <b>User Management</b>
                                <a class="item" href="/add-new-suplier">
                                    Add New Supliers
                                </a>
                                <a class="item" href="/add-new-procument-staff">
                                    Add New Procurement Staff
                                </a>
                                <a class="item" href="/add-new-site-manger">
                                    Add New Site Managers
                                </a>
                                <a class="item" href="/manager-supliers">
                                    Manage Supliers
                                </a>
                                <a class="item" href="/manager-procument-staff">
                                    Manage Procurement Staff
                                </a>
                                <a class="item" href="/manage-site-managers">
                                    Manage Site Manger
                                </a>
                            </a>
                            <a class="item">
                               <b> Project Management</b>
                                <a class="item" href="/add-new-project">
                                    Create New Project
                                </a>
                                <a class="item" href="/manage-projects">
                                   Manage Project
                                </a>

                            </a>
                        </a>
                        <a class="item" href="/add-new-project">

                        </a>
                        <a class="item" href="/login" >
                            Logout
                        </a>
                        <a class="item" href="/add-item">
                            Switch To Procurement Staff
                        </a>
                    </div>
                </body>
            </div>
        );
    }
}
