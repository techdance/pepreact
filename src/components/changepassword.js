import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../style-register.css';
// import logo from '../assets/images/logo-ahea.png';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { ENDPOINT_URL } from '../URLConfig';


function Register(props) {
    const [catcherror, Setcatcherror] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [logo, SetLogo] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

    useEffect(() => {
        GETLOGO()
    }, []);
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
    const PasswordSubmit = (e) => {
        e.preventDefault();
        let allowSbmit = true;
        if (passwordError === '') {
            setShowPasswordError(true)
            allowSbmit = false;
        }
        if (confirmPassword === '') {
            setShowConfirmPasswordError(true)
            allowSbmit = false;
        }
        if (allowSbmit && !confirmPasswordError) {
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get('token');
            let formData = new FormData();    //formdata object

            formData.append('password', password);   //append the values with key, value pair
            formData.append('confirm_password', confirmPassword);
            const config = {
                headers: { 'content-type': 'application/json' }
            }

            axios.post(`${ENDPOINT_URL}api/reset-password/` + myParam, formData, config)
                .then(response => {
                    if (response && response.status === 200) {
                        window.location.href='/?ispassword=true';
                    }
                    // // props.history.push({
                    // // 	pathname : '/',
                    // // 	state : {
                    // // 		message : true
                    // // 	}
                    // // })

                })
                .catch(error => {
                    Setcatcherror(true)
                    console.log(error);
                });
        }
    }

    return (
        <div>
            <div className="box-message p0">
				{ catcherror&&<p className='error'>Your Token Is Expired.</p>}
				{/* {showError && <p className="error">{showError!==true?showError:"Invalid credentials"}</p>} */}
			</div>
        <div id="xcontainer" className="page-sign-in">
            <header id="wrap-logo" className="ac">
            <a href={null}> {logo ? <img src={logo} /> : <div><i className="fa fa-spinner fa-spin" aria-hidden="true"  style={{fontSize:'36px'}}></i></div>}</a>
            </header>
            <section id="wrap-form">
                <form onSubmit={(e) => PasswordSubmit(e)}>
                    <div className="wrap-input icon-lock">
                        <Textbox
                            //tabIndex="1" // Optional.[String or Number].Default: none.
                            attributesInput={{ // Optional.
                                id: 'password',
                                name: 'password',
                                maxLength: 10,
                                type: (isShowPassword) ? 'text' : 'password',
                                placeholder: 'New Password',
                                // placeholder="Old Password"
                            }} // Optional.[String].Default: "text". Input type [text, password, number].
                            value={password} // Optional.[String].Default: "".
                            placeholder="Place your password here ^-^" // Optional.[String].Default: "".
                            onChange={(val, e) => { setPassword(e.target.value) }} // Required.[Func].Default: () => {}. Will return the value.
                            onBlur={(e) => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationCallback={res => setPasswordError({ passwordError: res, validate: false })}
                            validate={showPasswordError}
                            validationOption={{
                                min: 6,
                                msgOnError: 'Please enter valid password', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true // Optional.[Bool].Default: true. To determin if it is a required field. passwordMatch
                            }}
                        />
                        <span className="icon-eye fa fa-fw field-icon toggle-password fa-eye cursor-pointer" aria-hidden="true"
                            onClick={(event) => { (setIsShowPassword(!isShowPassword)) }} ></span>
                    </div>
                    <div className="wrap-input icon-lock">
                        <Textbox
                            //tabIndex="1" // Optional.[String or Number].Default: none.
                            attributesInput={{ // Optional.
                                id: 'confirm_password',
                                name: 'confirm_password',
                                maxLength: 10,
                                type: (isShowConfirmPassword) ? 'text' : 'password',
                                placeholder: 'Confirm Password',
                            }}
                            value={confirmPassword} // Optional.[String].Default: "".
                            placeholder="Confirm Password" // Optional.[String].Default: "".
                            onChange={(val, e) => { setConfirmPassword(e.target.value) }}  // Required.[Func].Default: () => {}. Will return the value.
                            onBlur={(val, e) => { if (confirmPassword != password) { setShowConfirmPasswordError(true) } }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationCallback={res => setConfirmPasswordError(res)}
                            validate={showConfirmPasswordError}
                            validationOption={{
                                msgOnError: 'Please enter confirm password', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
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
                        <span className="icon-eye fa fa-fw field-icon toggle-password fa-eye cursor-pointer"
                            onClick={(event) => { (setIsShowConfirmPassword(!isShowConfirmPassword)) }} aria-hidden="true"></span>
                    </div>

                    <div className="wrap-input-submit">
                        <input type="submit" className='cursor-pointer' name="" value="Reset Password" />
                    </div>
                </form>
            </section>
        </div>
        </div>

    );
}

export default Register;

