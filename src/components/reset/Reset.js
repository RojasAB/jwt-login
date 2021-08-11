import React, { PureComponent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reset } from "../../adapters/LoginApi";
import "./Reset.scss";

import lock_logo from "../../styles/images/lock.svg";

toast.configure();
export class Reset extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      validatePassword: "password",
    };

    this.onClickReset = this.onClickReset.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordCheckChange = this.handlePasswordCheckChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      validatePassword: "password",
    });
  }

  handlePasswordCheckChange(event) {
    this.setState({
      passwordCheck: event.target.value,
      validatePassword: "password",
    });
  }

  async onClickReset() {
    const code = this.props.match.params.code;
    if (this.state.password !== this.state.passwordCheck) {
      this.setState({ validatePassword: "password password-invalid" });
      toast("password mismatch pls check your input", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      await reset(code, this.state.password)
        .then((res) => {
          if (res.status === 200) {
            toast("success", { position: toast.POSITION.TOP_CENTER });
            // no need to reset the state coz component redirection
            this.props.history.push("/");
          }
        })
        .catch((err) => {
          this.setState({ validatePassword: "password password-invalid" });
          toast("an error ocurred pls check your input", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  }

  render() {
    return (
      <div className="login-div">
        <div className="title">Reset Your Password</div>
        <div className="fields">
          <div className={this.state.validatePassword}>
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
              placeholder="New Password"
              value={this.state.iPassword}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className={this.state.validatePassword}>
            <img
              src={lock_logo}
              className="icon-common"
              height="24px"
              width="30px"
              alt="password logo"
            />
            <input
              type="password"
              name="iPasswordCheck"
              className="pass-input"
              placeholder="Password Confirmation"
              value={this.state.iPasswordCheck}
              onChange={this.handlePasswordCheckChange}
            />
          </div>
          <button className="register-btn" onClick={this.onClickReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Reset;
