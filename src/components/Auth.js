import React, { Component } from "react";
import Style from "../styles/Style.css";
import { Link } from "react-router";
import SocialLogins from "react-firebase-social-logins";
import Firebase from "firebase";
import { Button } from "reactstrap";

const authDataCallback = function(authData) {
  this.setState({
    auth: authData,
    error: null
  });
};

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fireRef = new Firebase("https://toggl-a116c.firebaseio.com/");
  }

  componentDidMount() {
    this.fireRef.onAuth(authDataCallback.bind(this));
  }

  componentWillUnmount() {
    this.fireRef.offAuth(authDataCallback);
  }

  render() {
    return (
      <div className="app">
        {this.state.auth === null
          ? <SocialLogins
              fireRef={this.fireRef}
              errorHandler={(err => {
                this.setState({ error: err });
              }).bind(this)}
              textFn={provider => {
                switch (provider) {
                  case "google":
                    return "Sign in with Google";
                    break;
                }
              }}
            />
          : <Button
              color="danger"
              onClick={() => {
                this.fireRef.unauth();
              }}
            >
              Logout
            </Button>}
      </div>
    );
  }
}
export default Auth;
