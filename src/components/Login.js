import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Locallogo from '../assets/images/logo-ahea.png';
import { ENDPOINT_URL,ROLE_STUDENT_URL,ROLE_FACULTY_URL } from '../URLConfig';
import {history} from "../App";
import {Switch} from "react-router";
import AuthService from '../services/AuthService';

function Login(props) {



	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [showError, setShowError] = useState(false);
	const [ispassword, setispassword] = useState(false)
	const [logo, SetLogo] = useState(false)
	function getUrlVars() {
		var vars = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
			vars[key] = value;
		});
		return vars;
	}
	useEffect(() => {
		setispassword(getUrlVars()['ispassword'])
		GETLOGO()
	}, [])
	const GETLOGO = () => {
		axios.get(
			`${ENDPOINT_URL}api/image-get-logos`
		).then(res => {
			if (res && res.data.sso_login_logo) {
				SetLogo(res.data.sso_login_logo)
			}
		}).catch(err => {
			console.log('logoerror', err)
		})
	}
	function loginAction(e) {
		e.preventDefault();
		let allowSbmit = true;

		if (userName == '') {
			allowSbmit = false;
		}
		if (password == '') {
			allowSbmit = false;
		}
		// window.location.href = 'http://13.88.11.67:8080/?username=' + userName + '&password=' + password;
		//
		AuthService.login( {
			institutionEmail: userName,
			password: password
		})
			.then(function (response) {
				console.log(response);
				AuthService.localLogin(response.data);

				if(response.data.status) {
					console.log(' from if');
					return props.history.push("/01IN_00300");
				}

			})
			.catch(function (response) {
				console.log(response)
			});

		if (!allowSbmit) return false;
		let formData = new FormData();    //formdata object

		formData.append('institutionEmail', userName);   //append the values with key, value pair
		formData.append('password', password);

	}
	var isregister = getUrlVars()["isregister"];
	const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
	
	let style = {
		remembarStyle: {
			"position": "relative",
			"opacity": "1"
		},
		labelStyle: {
			"position": "relative",
			"margin-top": "12px",
			"margin-left": "10px"
		},
		forgetPassword:{
			"position": "relative",
			"margin-top": "12px"
		}
	}




	return (
		<div>
			<div className="box-message p0">
				{(isregister && <p>You have registered successfully.</p>)}
				{(ispassword && <p>Your new password was updated successfully.</p>)}
				{showError && <p className="error">{showError !== true ? showError : "Invalid credentials"}</p>}
			</div>
			<div id="xcontainer" className="page-sign-in">

				<header id="wrap-logo" className="ac">
					<a href="#"> {logo ? <img src={logo} /> : <div><i className="fa fa-spinner fa-spin" aria-hidden="true"  style={{fontSize:'36px'}}></i></div>}</a>
				</header>
				<section id="wrap-form">
					<form action="bradley home screen.html">
						<div className="wrap-input pl-0">
							<input type="text" name="userName" placeholder="User Name" required 
							onChange={(val, e) => { setUserName(val.target.value) }} value={userName} />
						</div>
						<div className="wrap-input pl-0">
							<input id="password-field" type="password" name="password" placeholder="Password" required 
							onChange={(val, e) => { setPassword(val.target.value) }} value={password} />
							{/* <span className="icon-eye fa fa-fw fa-eye field-icon toggle-password"></span> */}
						</div>

						<div className="wrap-checkbox">
							<div className="remember d-flex">
								<input type="checkbox" class="mr-1" name="remembarme" id="remember-me"  style={style.remembarStyle}/>
								<label htmlFor="remember-me" style={style.labelStyle}>Remember me</label>
							</div>
							<div className="forgot" style={style.forgetPassword}>
								<a href="/forgetpassword" >Forgot password?</a>
							</div>
						</div>


						<div className="wrap-input-submit">
							<input type="submit" style={{ cursor: 'pointer' }} name="" onClick={(event) => loginAction(event)} value="Sign In" className="btn2" />
						</div>
					</form>
				</section>
				{/* <div className="create-account ac m0">
					<p>Don't have an account? <a href="/register">Create an Account</a></p>
				</div> */}
				<div class="create-account ac m0">
					<p>Don't have an account? <a href="#"><b>Sign Up</b></a></p>
				</div>
			</div>
		</div>
	);
}

export default Login;
