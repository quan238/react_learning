import React, { Component } from "react";
import "./UserProfile.css";
export default class UserProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  handleChangeValue = (event) => {
    let { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div
        className="container-fluid "
        style={{
          backgroundColor: "#EEE",
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="w-50 bg-white m-5 p-5">
          <h1 className="text-center mt-0">User Profile</h1>

          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  required
                  name="firstName"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  required
                  name="lastName"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  required
                  name="userName"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  required
                  name="email"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  type="password"
                  required
                  name="passWord"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="password"
                  required
                  name="passWordConfirm"
                  onChange={(event) => {
                    this.handleChangeValue(event);
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passwordConfirm</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                className="btn text-white w-100 bg-dark "
                style={{ fontSize: 17 }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
