import React, { PureComponent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgot } from "../../adapters/LoginApi";
import "./SendLink.scss";

import email_logo from "../../styles/images/email.svg";

toast.configure();
export class SendLink extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { checkValid: "" };

    this.onClickSend = this.onClickSend.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      checkValid: "",
    });
  }

  async onClickSend() {
    const email = this.state.email;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(String(email).toLowerCase());
    if (!isEmailValid) {
      toast("email is invalid", { position: toast.POSITION.TOP_CENTER });
      this.setState({ checkValid: "invalid" });
    } else {
      await forgot(email)
        .then((res) => {
          if (res.status === 200) {
            toast("success", { position: toast.POSITION.TOP_CENTER });
            window.location.href = "/";
          }
        })
        .catch((err) => {
          toast("an error ocurred pls check your input", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  }

  render() {
    return (
      <div className="login-div">
        <div className="title">Forgot Password</div>
        <div className="fields">
          <div className={"email " + this.state.checkValid}>
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
          <button className="register-btn" onClick={this.onClickSend}>
            Send Link
          </button>
        </div>
      </div>
    );
  }
}

export default SendLink;
