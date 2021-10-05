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
                                <b>Item Management</b>
                                <a class="item" href="/add-item">
                                    Add New Items
                                </a>
                                <a class="item" href="/manage-items">
                                    Manage Items
                                </a>

                            </a>
                            <a class="item">
                                <b> Purchase Orders</b>
                                <a class="item" href="/create-purchaese-order">
                                    Create New Purchase Orders
                                </a>
                                <a class="item" href="/manage-purchaese-order">
                                    Manage Purcahse Orders
                                </a>

                            </a>
                        </a>
                        <a class="item" href="/add-new-project">

                        </a>
                        <a class="item" href="/login" >
                            Logout
                        </a>
                        <a class="item" href="/add-new-suplier">
                            Switch To Management
                        </a>
                    </div>
                </body>
            </div>
        );
    }
}
