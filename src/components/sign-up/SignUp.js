import React, { PureComponent } from "react";
import { register } from "../../adapters/LoginApi";
import "./SignUp.scss";

import lock_logo from "../../styles/images/lock.svg";
import email_logo from "../../styles/images/email.svg";
import text_logo from "../../styles/images/text.svg";

export class SignUp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickRegister = this.onClickRegister.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleFirstNameChange(event) {
    this.setState({ fname: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lname: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async onClickRegister() {
    const response = await register({
      email: this.state.email,
      firstName: this.state.fname,
      lastName: this.state.lname,
      password: this.state.password,
    });
    console.log(response);
    console.log(response.data);
  }

  render() {
    return (
      <div className="login-div">
        <div className="title">Register</div>
        <div className="fields">
          <div className="email">
            <img
              src={email_logo}
              className="icon-common"
              height="30px"
              width="30px"
              alt="user logo"
            />
            <input
              type="email"
              name="iEmail"
              className="email-input"
              placeholder="Email"
              value={this.state.iEmail}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="first-name">
            <img
              src={text_logo}
              className="icon-common"
              height="25px"
              width="25px"
              alt="icon common"
            />
            <input
              type="fname"
              name="iFName"
              className="fname-input"
              placeholder="First Name"
              value={this.state.iFName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="last-name">
            <img
              src={text_logo}
              className="icon-common"
              height="25px"
              width="25px"
              alt="icon common"
            />
            <input
              type="lname"
              name="iLName"
              className="lname-input"
              placeholder="Last Name"
              value={this.state.iLName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div className="password">
            <img
              src={lock_logo}
              className="icon-common"
              height="24px"
              width="30px"
              alt="password logo"
            />
            <input
              type="password"
              name="iPassword"
              className="pass-input"
              placeholder="Password"
              value={this.state.iPassword}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button className="register-btn" onClick={this.onClickRegister}>
            Register
          </button>
        </div>
        <div className="link sig-link">
          <span>Already have an account?</span>
          <a href="/">Sign in</a>
        </div>
      </div>
    );
  }
}

export default SignUp;
