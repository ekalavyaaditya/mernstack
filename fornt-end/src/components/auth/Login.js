import React, { Component } from "react";
import {} from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../general/Input";
import { Button } from "@mui/material";
import "./Login.css";
export default class Login extends Component {
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
    return (
      <div className="logbg">
        <div className="log">
          <form>
            <h1>Sign In</h1>
            <p>Sing Into Your Account</p>
            <lable htmlFor="username" class="text">Enter User Name</lable>
            <Input
              id="username"
              type="email"
              placeholder="Enter Email"
              value="email"
              onChange={this.onChange}
            />
            <lable htmlFrom="pass" class="text">Enter password </lable>
            <Input
              id="pass"
              type="password"
              placeholder="password"
              value="password1"
              onChange={this.onChange}
            />
            <br></br>
            <Button className="btn">Sing In</Button>
            <p className="my-1">
              Dont Have an account?<Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}