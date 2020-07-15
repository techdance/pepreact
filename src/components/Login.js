import React, { useState } from "react";

// import { Redirect } from "react-router-dom"; TLM: Redirect never used in code.

import axios from "axios";
import logo from "../assets/images/logo-ahea.png";
// import "../style-register.css";

function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showError, setShowError] = useState(false);

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }

  function loginAction(e) {
    e.preventDefault();
    let allowSbmit = true;

    if (userName == "") {
      allowSbmit = false;
    }
    if (password == "") {
      allowSbmit = false;
    }
    console.log(userName);
    //window.location.href = 'http://13.88.11.67:8080/?username=' + userName + '&password=' + password;

    // axios.post('http://23.99.141.44:3000/login', {
    // 	institutionEmail: userName,
    // 	password: password
    // })
    // 	.then(function (response) {
    // 		console.log(response)
    // 		window.location.href = 'http://13.88.11.67:8080/?username=' + userName;
    // 	})
    // 	.catch(function (response) {
    // 		console.log(response)
    // 	});

    let formData = new FormData(); //formdata object

    formData.append("institutionEmail", userName); //append the values with key, value pair
    formData.append("password", password);

    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("http://23.99.141.44:3000/api/login", formData, config)
      .then((response) => {
        console.log(response);
        if (response.data.status == true) {
          //window.location.href = 'http://localhost:8080?access_token=' + response.data.user;
          window.location.href =
            "http://13.88.11.67:8080?access_token=" + response.data.user;
        } else if (response.data.success == "Incorrect username or password") {
          setShowError(true);
        }
      })
      .catch((error) => {
        setShowError(true);
      });
  }
  var isregister = getUrlVars()["isregister"];

  const url = "https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6";
  return (
    <div>
      <div className="box-message p0">
        {isregister && <p>You have registered successfully.</p>}
        {showError && <p className="error">Invalid credentials</p>}
      </div>

      <div id="container" className="page-sign-in">
        <header id="wrap-logo" className="ac">
          <a href="#">
            <img src={logo} />
          </a>
        </header>
        <section id="wrap-form">
          <form action="bradley home screen.html">
            <div className="wrap-input icon-user">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                required
                onChange={(val, e) => {
                  setUserName(val.target.value);
                }}
                value={userName}
              />
            </div>
            <div className="wrap-input icon-lock">
              <input
                id="password-field"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(val, e) => {
                  setPassword(val.target.value);
                }}
                value={password}
              />
              <span className="icon-eye fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>

            <div className="wrap-checkbox">
              <div className="remember d-flex">
                <input type="checkbox" name="" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <div className="wrap-input-submit">
              <input
                type="submit"
                name=""
                onClick={(event) => loginAction(event)}
                value="Sign In"
                className="btn2"
              />
            </div>
          </form>
        </section>
        <div className="create-account ac m0">
          <p>
            Don't have an account? <a href="/register">Create an Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
