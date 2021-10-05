import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { Multiselect } from 'multiselect-react-dropdown';
import { toast } from 'toast-notification-alert';

class AddVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.OnchnageAmmount = this.OnchnageAmmount.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {

            options: [],
            Code: '',
            Ammount: '',
            name: '',
            size: '',
            categories: [],
            Status: ''

        };
    }

    onChangeCode(e) {
        this.setState({
            Code: e.target.value
        })
    }

    OnchnageAmmount(e) {
        this.setState({
            Ammount: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeSize(e) {
        this.setState({
            size: e.target.value
        })
    }


    onSelect(selectedList, selectedItem) {
        this.setState({
            categories: selectedList
        })


    }

    onSubmit(e) {
        e.preventDefault();
        const User = {
            Email: this.state.Code,
            Password: this.state.Ammount,

        };
        window.location = `/add-new-suplier`
        console.log(User);

    }

    render() {
        return (
            <div style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
      }}
>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>  


                <div style={{ fontSize: '30px' }} >
               <center> <Image style={{ height: '200px' }} src="https://newsroom.hilton.com/assets/DBTR/images/logos/DoubleTree-Logo-White_HR.png" /></center>
                    <center style={{ color: 'black' }}>Welcome Back, Please Login to continue</center>
                    <br></br>
                </div >
                <div style={{ marginLeft: '33.4%' }} className="card col-12 col-lg-4 login-card mt-2 hv-center">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group text-left">
                            <br></br>
                            <label htmlFor="exampleInputEmail1"  >Email address</label>
                            <br></br>
                            <input type="text"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.Code}
                                onChange={this.onChangeCode}
                            />
                            <br></br>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={this.state.Ammount}
                                onChange={this.OnchnageAmmount}
                            />
                        </div>

                        <center>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Login
                            </button></center>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddVehicle;