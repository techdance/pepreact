import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
// import logo from '../assets/images/logo-ahea.png';
// import '../style-register.css';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { ENDPOINT_URL } from '../URLConfig';
function ForgetPass(props) {
    const [EmailError, setEmailError] = useState(false);
    const [email, setEmail] = useState('');
    const [success, Setsuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showEmailError, setshowEmailError] = useState(false);
    const [logo, SetLogo] = useState(false)
    useEffect(()=>{
        GETLOGO()
    },[])
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
    const Onsubmit = (e) => {
        e.preventDefault()
        let allowSbmit = true;
        if (email === '') {
            setshowEmailError(true)
            allowSbmit = false;
        }
        if (allowSbmit) {
            const config = {
                headers: { 'content-type': 'application/json' }
            }
            axios.get(`${ENDPOINT_URL}api/forget-password?user=` + email, config).then(res => {
                if (res && res.data.status === 200) {
                    Setsuccess(true)
                    setEmail('')
                    setTimeout(function () { Setsuccess(false); props.history.push('/forgetpassword') }, 3000)
                }
            }).catch(e => {
                setShowError(true)
                setTimeout(function () { setShowError(false); props.history.push('/forgetpassword') }, 2000)
                console.log('forgetpassworderror', e)
            })
        }
    }
    // function loginAction(e) {
    // 	e.preventDefault();
    // 	let allowSbmit = true;

    // 	if (userName == '') {
    // 		allowSbmit = false;
    // 	}
    // 	if (password == '') {
    // 		allowSbmit = false;
    // 	}
    // 	console.log(userName)
    // 	//window.location.href = 'http://13.88.11.67:8080/?username=' + userName + '&password=' + password;

    // 	// axios.post('http://23.99.141.44:3000/login', {
    // 	// 	institutionEmail: userName,
    // 	// 	password: password
    // 	// })
    // 	// 	.then(function (response) {
    // 	// 		console.log(response)
    // 	// 		window.location.href = 'http://13.88.11.67:8080/?username=' + userName;
    // 	// 	})
    // 	// 	.catch(function (response) {
    // 	// 		console.log(response)
    // 	// 	});


    // 	let formData = new FormData();    //formdata object

    // 	formData.append('institutionEmail', userName);   //append the values with key, value pair
    // 	formData.append('password', password);

    // 	const config = {
    // 		headers: { 'content-type': 'application/json' }
    // 	}

    // 	axios.post('http://23.99.141.44:3000/api/login', formData, config)
    // 		//	axios.post('http://54.188.203.178/api/login', formData, config)
    // 		.then(response => {
    // 			console.log(response)
    // 			if (response.data.status == true) {
    // 				axios.get('http://23.99.141.44:3000/getUserDetails?user=' + response.data.user).then(res => {
    // 					console.log('userDetails', res)
    // 					if (res.data && res.data.user) {
    // 						if (res.data.user.roles === 'ROLE_STUDENT') {
    // 							window.location.href = "http://137.117.70.79/login/index.php?user=" + response.data.user;
    // 						} else {
    // 							window.location.href = 'http://13.88.11.67:8080?access_token=' + response.data.user;
    // 						}
    // 					}
    // 				}).catch(e => {
    // 					console.log('error', e)
    // 				})
    // 				//window.location.href = 'http://localhost:8080?access_token=' + response.data.user;
    // 				// window.open("http://104.40.48.206/sso-login?user=" + response.data.user, "_blank");
    // 				// window.open("http://137.117.70.79/login/index.php?user=" + response.data.user, "_blank");
    // 				// window.location.href = 'http://13.88.11.67:8080?access_token=' + response.data.user;
    // 			} else if (response.data.success == "Incorrect username or password") {
    // 				setShowError(true)
    // 			}
    // 		})
    // 		.catch(error => {
    // 			setShowError(true)
    // 		});
    // }

    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
        <div>
            <div className="box-message p0">
                {(success && <p className="success">Reset password link sent to your registered email.</p>)}
                {showError && <p className="error">User not found.</p>}
            </div>


            <div id="xcontainer" className="page-sign-in">

                <header id="wrap-logo" className="ac">
                <a href="#"> {logo ? <img src={logo} /> : <i className="fa fa-spinner fa-spin" aria-hidden="true" style={{fontSize:'36px'}}/>}</a>
                    {/* <a href="#"><img src={logo} /></a> */}
                </header>
                <div className='ac forget-header' style={{ color: '#299eff' }}>
                    Forgot Password?
                </div>
                <section id="wrap-form">
                    <form noValidate onSubmit={(e) => Onsubmit(e)}>
                        <div className="wrap-input icon-user">
                            <Textbox
                                //tabIndex="1" // Optional.[String or Number].Default: none.
                                attributesInput={{ // Optional.
                                    id: 'Name',
                                    name: 'email',
                                    type: 'email',
                                    placeholder: 'Institution Email',
                                    // placeholder="Old Password"
                                }} // Optional.[String].Default: "text". Input type [text, password, number].
                                value={email} // Optional.[String].Default: "".
                                // Optional.[String].Default: "".
                                onChange={(val, e) => { setEmail(val) }} // Required.[Func].Default: () => {}. Will return the value.
                                onBlur={(e) => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationCallback={res => setEmailError({ EmailError: res, validate: false })}
                                validate={showEmailError}
                                validationOption={{
                                    min: 6,
                                    msgOnError: 'Please enter valid Email', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                    required: true // Optional.[Bool].Default: true. To determin if it is a required field. passwordMatch
                                }}
                            />
                            {/* <input type="email" name="email" placeholder="Institution Email" required onChange={(val, e) => { setEmail(val.target.value) }} value={email} /> */}
                        </div>
                        <div className="wrap-checkbox">
                            <div className="remember d-flex">
                                <input type="checkbox" name="" id="remember-me" />
                                <label htmlFor="remember-me"></label>
                            </div>
                            <div className="forgot">
                                <a href="/">Back to Login?</a>
                            </div>
                        </div>
                        <div className="wrap-input-submit">
                            <input type="submit" name="" value="Send Password Reset Link" className="btn2" style={{ cursor: 'pointer' }} />
                        </div>
                    </form>
                </section>
                {/* <div className="create-account ac m0">
					<p>Don't have an account? <a href="/register">Create an Account</a></p>
				</div> */}
            </div>
        </div>
    );
}

export default ForgetPass;
