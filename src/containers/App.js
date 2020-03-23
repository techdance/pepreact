import React from 'react';
import axios from 'axios';

function shoot(){
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
			txt_last_name:txt_last_name,
			txt_email:txt_email,
			txt_inst_name:txt_inst_name,
			txt_password:txt_password
		},
		config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        document.getElementById("txt_prefix").value="";
        document.getElementById("txt_first_name").value="";
        document.getElementById("txt_last_name").value="";
        document.getElementById("txt_email").value="";
        document.getElementById("txt_inst_name").value="";
        document.getElementById("txt_password").value="";
        document.getElementById("txt_confirm_password").value="";
        alert("You have registered successfully.");
        //console.log(response)
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}
function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <div id="container">
		<div>
			<h1>Registration Form</h1>
		</div>
		<form>
			<div class="wrap-input icon-briefcase">
				<input type="text" name="txt_prefix" id="txt_prefix" placeholder="Prefix" />
			</div>
			<div class="wrap-input icon-user">
				<input type="text" name="txt_first_name" id="txt_first_name" placeholder="First Name" />
				<a href="#" title="More Info"><i class="fas fa-info-circle"></i></a>
			</div>
			<div class="wrap-input icon-user">
				<input type="text" name="txt_last_name" id="txt_last_name" placeholder="Last Name" />
				<a href="#" title="More Info"><i class="fas fa-info-circle"></i></a>
			</div>
			<div class="wrap-input icon-envelope">
				<input type="text" name="txt_email" id="txt_email" placeholder="Institution Email" />
			</div>
			<div class="wrap-input icon-shield">
				<input type="text" name="txt_inst_name" id="txt_inst_name" placeholder="Institution Name" />
			</div>
			<div class="wrap-input icon-lock">
				<input type="password" name="txt_password" id="txt_password" placeholder="Password" />
			</div>
			<div class="wrap-input icon-lock">
				<input type="password" name="txt_confirm_password" id="txt_confirm_password" placeholder="Confirm Password" />
			</div>

			<div class="wrap-input-submit">
				<input type="button" onClick={shoot} name="" value="Create Account" />
			</div>
			<div class="box ac">
				<a href="#" class="privacy">Privacy Policy</a>
			</div>
		</form>	
	</div>
  );
}

export default HomepageImage;
