import React, { PureComponent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../adapters/LoginApi";
import "./SignIn.scss";

import user_logo from "../../styles/images/user.svg";
import lock_logo from "../../styles/images/lock.svg";

toast.configure();
export class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { validationCheck: "" };

    this.onClickLogin = this.onClickLogin.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
      validationCheck: "",
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      validationCheck: "",
    });
  }

  async onClickLogin() {
    await login({
      username: this.state.username,
      password: this.state.password,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ validationCheck: "" });
        toast(res.data.jwt, { position: toast.POSITION.TOP_CENTER });
      })
      .catch((err) => {
        toast(
          "error while login pls check your username/password combination",
          { position: toast.POSITION.TOP_CENTER }
        );
        console.log(err);
        this.setState({ validationCheck: "invalid" });
      });
  }

  render() {
    return (
      <div className="login-div">
        <div className="title">Sign in</div>
        <div className="fields">
          <div className={"username " + this.state.validationCheck}>
            <img
              src={user_logo}
              className="icon-common"
              height="30px"
              width="30px"
              alt="user logo"
            />
            <input
              type="username"
              name="iUsername"
              className="user-input"
              placeholder="Email/Username"
              value={this.state.iUsername}
              onChange={this.handleUserChange}
            />
          </div>
          <div className={"password " + this.state.validationCheck}>
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
          <div className="link forgot">
            <a href="/forget">Forgot password?</a>
          </div>
          <button className="signin-btn" onClick={this.onClickLogin}>
            LOGIN
          </button>
          <div className="link sig-link">
            <span>Don't have an account?</span>
            <a href="/register">Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
