import React from 'react';
import axios from 'axios';
import logo from '../assets/images/logo-ahea.png';
import '../style-register.css';

function shoot() {
	var txt_prefix = document.getElementById("txt_prefix").value;
	var txt_first_name = document.getElementById("txt_first_name").value;
	var txt_last_name = document.getElementById("txt_last_name").value;
	var txt_email = document.getElementById("txt_email").value;
	var txt_inst_name = document.getElementById("txt_inst_name").value;
	var txt_password = document.getElementById("txt_password").value;
	axios({
		method: 'get',
		url: 'http://40.70.76.8/ahea/action_page.php',
		params: {
			txt_prefix: txt_prefix,
			txt_first_name: txt_first_name,
			txt_last_name: txt_last_name,
			txt_email: txt_email,
			txt_inst_name: txt_inst_name,
			txt_password: txt_password
		},
		config: { headers: { 'Content-Type': 'multipart/form-data' } }
	})
		.then(function (response) {
			//handle success
			document.getElementById("txt_prefix").value = "";
			document.getElementById("txt_first_name").value = "";
			document.getElementById("txt_last_name").value = "";
			document.getElementById("txt_email").value = "";
			document.getElementById("txt_inst_name").value = "";
			document.getElementById("txt_password").value = "";
			document.getElementById("txt_confirm_password").value = "";
			alert("You have registered successfully.");
			//console.log(response)
		})
		.catch(function (response) {
			//handle error
			console.log(response)
		});
}
function Login() {
	console.log(logo);
	const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
	return (
		<div id="container" className="page-sign-in">
			<header id="wrap-logo" className="ac">
				<a href="#"><img src={logo} /></a>
			</header>
			<section id="wrap-form">
				<form action="bradley home screen.html">
					<div className="wrap-input icon-user">
						<input type="text" name="" placeholder="User Name" required/>
					</div>
					<div className="wrap-input icon-lock">
						<input id="password-field" type="password" name="" placeholder="Password" value="secret" required/>
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
						<input type="submit" name="" value="Sign In" className="btn2" />
					</div>
				</form>
			</section>
			<div className="create-account ac m0">
				<p>Don't have an account? <a href="#">Acreate an Account</a></p>
			</div>
		</div>
	);
}

export default Login;
