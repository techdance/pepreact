import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style-register.css';
import logo from '../assets/images/logo-ahea.png';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';


function HomepageImage() {
	const [preFix, setPreFix] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);



	const [firstName, setFirstName] = useState('');
	const [firstNameError, setFirstNameError] = useState(false);
	const [showFirstNameError, setShowFirstNameError] = useState(false);

	const [lastName, setLastName] = useState('');
	const [lastNameError, setLastNameError] = useState(false);
	const [showLastNameError, setShowLastNameError] = useState(false);

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [showEmailError, setShowEmailError] = useState(false);

	const [instName, setInstName] = useState('');
	const [instNameError, setInstNameError] = useState(false);
	const [showInstNameError, setShowInstNameError] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [showPasswordError, setShowPasswordError] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);
	const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

	const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';

	useEffect(() => {
	});

	function shoot(e) {
		e.preventDefault();
		let allowSbmit = true;
		if (firstName == '') {
			setShowFirstNameError(true)
			allowSbmit = false;
		}
		if (lastName == '') {
			setShowLastNameError(true)
			allowSbmit = false;
		}
		if (emailError == '') {
			setShowEmailError(true)
			allowSbmit = false;
		}
		if (instNameError == '') {
			setShowInstNameError(true)
			allowSbmit = false;
		}
		if (passwordError == '') {
			setShowPasswordError(true)
			allowSbmit = false;
		}
		if (confirmPassword == '') {
			setShowConfirmPasswordError(true)
			allowSbmit = false;
		}
		console.log(confirmPasswordError)

		if (allowSbmit && !confirmPasswordError) {
			axios.post('http://23.99.141.44:3000/api/registration', {
				firstname: firstName,
				lastname: lastName,
				prefix: "Mr",
				institutionemail: email,
				institutionname: instName,
				password: password
			})
				.then(function (response) {
					//handle success					
					alert("You have registered successfully.");
					//console.log(response)
				})
				.catch(function (response) {
					//handle error
					console.log(response)
				});
		}
	}

	function changeConfirmPassword(val) {
		setConfirmPassword(val);
		if (password != confirmPassword) {
			setShowConfirmPasswordError(true);
		}
	}
	console.log(showConfirmPasswordError)

	return (
		<div id="container">
			<header id="wrap-logo" className="ac">
				<a href="#"><img src={logo} /></a>
			</header>
			<section id="wrap-form">
				<div>
					<h1>Registration Form</h1>
				</div>
				<form>
					<div class="wrap-input icon-briefcase">
						<select name="txt_prefix" label="" id="txt_prefix" placeholder="Prefix" onChange={(val, e) => { setPreFix(val) }}>
							<option class="" value="">Prefix</option>
							<option class="" value="Dr"> Dr </option>
							<option class="" value="Miss"> Miss </option>
							<option class="" value="Mr"> Mr </option>
							<option class="" value="Mrs"> Mrs </option>
							<option class="" value="Ms"> Ms </option>
							<option class="" value="Mx"> Mx </option>
						</select>
					</div>
					<div class="wrap-input icon-user">
						<Textbox
							id={'txt_first_name'}
							name="txt_first_name"
							type="password"
							value={firstName}
							placeholder="First Name" // Optional.[String].Default: "".
							onChange={(val, e) => { setFirstName(val) }}
							onBlur={(e) => { console.log(e) }} s
							validationCallback={res => setFirstNameError(res)}
							validate={showFirstNameError}
							validationOption={{
								msgOnError: 'Please enter your first name',
								check: true,
								required: true
							}}
						/>
						{/* <input type="text" name="txt_first_name" id="txt_first_name" placeholder="First Name" required/> */}
						<a href="#" title="More Info"><i class="fas fa-info-circle"></i></a>
					</div>
					<div class="wrap-input icon-user">
						{/* <input type="text" name="txt_last_name" id="txt_last_name" placeholder="Last Name" required/> */}
						<Textbox
							id={'txt_last_name'} // Optional.[String].Default: "".  Input ID.
							name="txt_last_name" // Optional.[String].Default: "". Input name.
							type="text" // Optional.[String].Default: "text". Input type [text, password, number].
							value={lastName} // Optional.[String].Default: "".
							placeholder="Place your name here ^-^" // Optional.[String].Default: "".
							onChange={(val, e) => { setLastName(val) }}
							onBlur={(e) => { console.log(e) }}
							validationCallback={res => setLastNameError({ lastNameError: res, validate: false })}
							validate={showLastNameError}
							validationOption={{
								msgOnError: 'Please enter your last name',
								check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
								required: true // Optional.[Bool].Default: true. To determin if it is a required field.
							}}
						/>
						<a href="#" title="More Info"><i class="fas fa-info-circle"></i></a>
					</div>
					<div class="wrap-input icon-envelope">
						{/* <input type="text" name="txt_email" id="txt_email" placeholder="Institution Email" required/> */}
						<Textbox
							//tabIndex="1" // Optional.[String or Number].Default: none.
							id={'txt_email'} // Optional.[String].Default: "".  Input ID.
							name="txt_email" // Optional.[String].Default: "". Input name.
							type="text" // Optional.[String].Default: "text". Input type [text, password, number].
							value={email} // Optional.[String].Default: "".
							placeholder="Place your name here ^-^" // Optional.[String].Default: "".
							onChange={(val, e) => { setEmail(val) }} // Required.[Func].Default: () => {}. Will return the value.
							onBlur={(e) => { console.log(e) }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
							validationCallback={res => setEmailError({ emailError: res, validate: false })}
							validate={showEmailError}
							validationOption={{
								msgOnError: 'Please enter your institution email', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
								check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
								required: true,
								customFunc: email => {
									const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
									if (reg.test(String(email).toLowerCase())) {
										return true;
									} else {
										return 'It is not a valid email address';
									}
								}
							}}
						/>
					</div>
					<div class="wrap-input icon-shield">
						<Textbox
							//tabIndex="1" // Optional.[String or Number].Default: none.
							id={'txt_email'} // Optional.[String].Default: "".  Input ID.
							name="txt_email" // Optional.[String].Default: "". Input name.
							type="text" // Optional.[String].Default: "text". Input type [text, password, number].
							value={instName} // Optional.[String].Default: "".
							placeholder="Place your name here ^-^" // Optional.[String].Default: "".
							onChange={(val, e) => { setInstName(val) }} // Required.[Func].Default: () => {}. Will return the value.
							onBlur={(e) => { console.log(e) }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
							validationCallback={res => setInstNameError({ instNameError: res, validate: false })}
							validate={showInstNameError}
							validationOption={{
								msgOnError: 'Please enter your institution name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
								check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
								required: true // Optional.[Bool].Default: true. To determin if it is a required field. passwordMatch
							}}
						/>
						{/* <input type="text" name="txt_inst_name" id="txt_inst_name" placeholder="Institution Name" required/> */}
					</div>
					<div class="wrap-input icon-lock">
						<Textbox
							//tabIndex="1" // Optional.[String or Number].Default: none.
							attributesInput={{ // Optional.
								id: 'Name',
								name: 'Name',
								maxLength: 10,
								type: (isShowPassword) ? 'text' : 'password',
							}} // Optional.[String].Default: "text". Input type [text, password, number].
							value={password} // Optional.[String].Default: "".
							placeholder="Place your name here ^-^" // Optional.[String].Default: "".
							onChange={(val, e) => { setPassword(val) }} // Required.[Func].Default: () => {}. Will return the value.
							onBlur={(e) => { console.log(e) }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
							validationCallback={res => setPasswordError({ passwordError: res, validate: false })}
							validate={showPasswordError}
							validationOption={{
								msgOnError: 'Please enter your password', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
								check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
								required: true // Optional.[Bool].Default: true. To determin if it is a required field. passwordMatch
							}}
						/>
						<span class="icon-eye fa fa-fw field-icon toggle-password fa-eye" aria-hidden="true" 
							onClick={(event) => { (setIsShowPassword(!isShowPassword)) }} ></span>
						{/* <input type="password" name="txt_password" id="txt_password" placeholder="Password" required/> */}
					</div>
					<div class="wrap-input icon-lock">
						{/* <input type="password" name="txt_confirm_password" id="txt_confirm_password" placeholder="Confirm Password" /> */}
						<Textbox
							//tabIndex="1" // Optional.[String or Number].Default: none.
							attributesInput={{ // Optional.
								id: 'Name',
								name: 'Name',
								maxLength: 10,
								type: (isShowConfirmPassword) ? 'text' : 'password',
							}}
							value={confirmPassword} // Optional.[String].Default: "".
							placeholder="Confirm Password" // Optional.[String].Default: "".
							onChange={(val, e) => { setConfirmPassword(val) }}  // Required.[Func].Default: () => {}. Will return the value.
							onBlur={(val, e) => { if (confirmPassword != password) { setShowConfirmPasswordError(true) } }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
							validationCallback={res => setConfirmPasswordError(res)}
							validate={showConfirmPasswordError}
							validationOption={{
								msgOnError: 'Password not match', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
								check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
								required: true, // Optional.[Bool].Default: true. To determin if it is a required field. 
								customFunc: confirmPassword => { //Optional.[Func].Default: none. Custom function. Returns true or err message or { error: true, message: 'message', showOnSuccess: true }
									console.log(confirmPassword)
									if (confirmPassword != password) {
										return 'Password not match';
									} else {
										return true;
									}
								}
							}}

						/>
						<span class="icon-eye fa fa-fw field-icon toggle-password fa-eye"
							onClick={(event) => { (setIsShowConfirmPassword(!isShowConfirmPassword)) }} aria-hidden="true"></span>
						<a href="#" title="More Info" ><i class="fas fa-info-circle"></i></a>
					</div>

					<div class="wrap-input-submit">
						<input type="submit" onClick={(event) => shoot(event)} name="" value="Create Account" />
					</div>
					<div class="box ac">
						<a href="#" class="privacy">Privacy Policy</a>
					</div>
				</form>
			</section>
		</div>
	);
}

export default HomepageImage;

