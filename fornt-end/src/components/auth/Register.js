import React, { Component } from "react";
import Input from "../general/Input";
import { Button } from "@mui/material";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"; 
import { register } from "../../actions/authAction";
import "./RegisterStyle.css";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
    };
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    const { name, password1, password2, email } = this.state;
    return (
      <div className="Regbg">
        <div className="Main">
          <h1 className="heading">Register</h1>
          <p className="pgr">Create Your Account</p>
          <div className="input-container">
            <label className="lab">Enter Name</label>
            <Input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
            />
            <br />
            <label className="lab">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
            />
            <br />
            <label className="lab">Password</label>
            <Input
              name="password1"
              type="password"
              placeholder="Enter Password"
              value={password1}
              onChange={this.onChange}
            />
            <br />
            <label className="lab">Confirm Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={this.onChange}
            />
          </div>
          <br />
          <Button className="Rbtn">Register</Button>
          <br />
        </div>
      </div>
    );
  }
}
