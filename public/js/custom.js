jQuery(function() {
	jQuery("#menu-button-hide-show").click(function(){
		if(jQuery( "#sidebar" ).hasClass( "hidden" )){
			jQuery(this).removeClass("icon-arrow-right");
			jQuery(this).addClass("icon-arrow-left");
		}else{
			jQuery(this).removeClass("icon-arrow-left");
			jQuery(this).addClass("icon-arrow-right");
		}
		jQuery(".group-hide").toggle();
		jQuery("#sidebar").toggleClass("hidden");
	});

	jQuery("input[name='radio1']").click(function(){
		var radioValue = jQuery("input[name='radio1']:checked").val();
		if(radioValue == 'option1'){
			jQuery('#input-end-date').prop("disabled", true);
		}else{
			jQuery('#input-end-date').prop("disabled", false);
		}
	});

jQuery('.dropdown a').click(function(){
    	jQuery('.dropdown-menu').toggle();
    });

	jQuery("#save-week-1, #complete-week-1").click(function(){
		jQuery("#w1-co").html("Connect with a partner in another country and engage in conversations that result in a joint project that enhances student's intercultural competency skills and knowledge.");
		jQuery("#w1-led").html("• Synchronous Video Lecture<br>• Independent Assignments");
		jQuery("#w1-a").html("• Syllabus Review");
		jQuery("#w1-c").html("• Text Book: Global Ethics, Chapter 1<br>• Video: Introduction to COIL");

		jQuery("#tr-w1").remove();
	});




	jQuery('.dropdown-menu .toltip-body').on('click', function(e) {
		e.stopPropagation();
	});

	jQuery('#notification-toltip .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#notification-toltip #toltip-item-"+id).remove();

		var notification_number_outer_current = jQuery('.top-wrap-notifications .outer').html();
		notification_number_outer_current = parseInt(notification_number_outer_current);
		notification_number_outer_new = notification_number_outer_current - 1;
		jQuery('.top-wrap-notifications .outer').html(notification_number_outer_new);

		if(notification_number_outer_new == 0)
			jQuery('.top-wrap-notifications .note').remove();

	});

	jQuery('#email-toltip .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#email-toltip #toltip-item-"+id).remove();
	});

	jQuery('.dropdown-menu-course .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#toltip-item-course-"+id).remove();
	});
	jQuery('#toltip-my-calendar .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#toltip-my-calendar #toltip-item-"+id).remove();
	});



	jQuery("#add-membership").click(function(e){
		e.stopPropagation();
		jQuery(".membership").show();
	});

	jQuery("#remove-membership-2").click(function(e){
		e.stopPropagation();
		jQuery("#membership-2").hide();
	});

	jQuery("#remove-membership-3").click(function(e){
		e.stopPropagation();
		jQuery("#membership-3").hide();
	});


	jQuery("#add-certificate").click(function(e){
		e.stopPropagation();
		jQuery(".certificate").show();
	});

	jQuery("#remove-certificate-2").click(function(e){
		e.stopPropagation();
		jQuery("#certificate-2").hide();
	});

	jQuery("#remove-certificate-3").click(function(e){
		e.stopPropagation();
		jQuery("#certificate-3").hide();
	});

	jQuery("#add-area").click(function(e){
		e.stopPropagation();
		jQuery(".area").show();
	});

	jQuery("#remove-area-2").click(function(e){
		e.stopPropagation();
		jQuery("#area-2").hide();
	});

	jQuery("#remove-area-3").click(function(e){
		e.stopPropagation();
		jQuery("#area-3").hide();
	});
		jQuery("#remove-area-3").click(function(e){
			e.stopPropagation();
			jQuery("#area-3").hide();
		});


	jQuery("#btn-notification").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();

		jQuery("#notification-toltip").slideToggle();
		jQuery(".top-icon .note").show();
		jQuery("#btn-notification .note").slideToggle();
	});

	jQuery(".toltip-close-details a.close-this").click(function(){
		jQuery(this).closest(".toltip-item").attr('style','display:none !important');
	});

	jQuery("#btn-email").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();

		jQuery("#email-toltip").slideToggle();
		jQuery(".top-icon .note").show();
		jQuery("#btn-email .note").slideToggle();
	});

	jQuery("#btn-user").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();
		jQuery(".top-icon .note").show();
		jQuery("#user-toltip").slideToggle();
	});

	jQuery(".toltip-header-right a.icon-close").click(function(){
		jQuery(this).closest(".toltip-item").attr('style','display:none !important');
	});

	jQuery(".box-top").click(function(e){
		e.stopPropagation();
		jQuery(this).find(".toltip2").slideToggle();
	});

	jQuery("a.btn-remove").click(function(e){
		e.stopPropagation();
		jQuery(this).closest(".col-lg-3").toggle("slide",{ direction: "left" }, 1000);
	});

	jQuery(".partner-img").click(function(e){
		e.stopPropagation();
		jQuery(".toltip3").slideUp();
		jQuery(this).find(".toltip3").slideToggle();
	});

	jQuery("#partner-search, .btn-close").click(function(e){
		e.stopPropagation();
		jQuery("#search-toltip").slideToggle();
	});

	//ALL INTEREST
	/*jQuery(".toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery(".interest-modal").slideUp();
	});*/

	jQuery(".view-more-interest").click(function(e){
		e.stopPropagation();
		jQuery(".interest-modal").slideUp();
		var id;
		id = jQuery(this).attr("id");
		jQuery("#"+id+"-modal").slideToggle();
	});

	//interest 1
	/*jQuery("#view-more-interest").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal").slideToggle();
	});*/


	//interest 2
	jQuery("#view-more-interest-2").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal-2").slideToggle();
	});

	/*jQuery("#view-more-interest-modal2 .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal2").slideToggle();
	});*/
	//view interest 3
	jQuery("#view-more-interest-3").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal-3").slideToggle();
	});

	/*jQuery("#view-more-interest-modal3 .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal3").slideToggle();
	});*/



	jQuery("#add-interest").click(function(e){
		e.stopPropagation();
		jQuery("#add-interest-modal").slideToggle();
	});
	/*jQuery("#add-interest-modal .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#add-interest-modal").slideToggle();
	});*/

	jQuery("#btn-my-calendar").click(function(e){
		e.stopPropagation();
		jQuery("#toltip-my-calendar").slideToggle();
	});

	jQuery("#headline-my-academic-profile").hover(function(e){
		jQuery("#toltip-headline-my-academic-profile").show();
		e.stopPropagation();
	});

	/*jQuery(".toltip-inner .icon-close-hover").click(function(){
		jQuery(this).closest(".toltip-hover").attr('style','display:none !important');
	});*/

	jQuery("#your-advisor").hover(function(e){
		jQuery("#toltip-your-advisor").show();
	});

	jQuery('#my-calendar-container').on('mouseleave', '.event-styled .popup', function(){
		jQuery(this).css("display","none");
	});

	jQuery("#btn-sign-out").click(function(){
		jQuery('#userModal').modal('hide');
	});

	jQuery(".remove-interest").click(function (){
		var id;
		id = jQuery(this).data("id");

		if(confirm("Are you sure to remove areas of interest?"))
			jQuery("#areas-of-interest-"+id).slideUp().remove();
	});
	jQuery("#save-what-type").click(function(){
		jQuery("#areas-of-interest-3").show()
	});

	jQuery("a[data-target='#badgesModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	jQuery("a[data-target='#notificationModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	jQuery("a[data-target='#messagesModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	$("#badgesModal, #notificationModal, #messagesModal").on("hide.bs.modal", function () {
	    jQuery(".note").show();
	});



	/* always end
	jQuery('.datepicker').datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd-mm-yy'
	});
	*/



});


function project_type(values){
	var htmlcont_1, htmlcont_2, htmlcont_3, htmlcont_4;

	// academy journal - best practices - general publication - mentorship - peer review research
	htmlcont_1 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business " selected>Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English" selected="">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global" selected="">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All" selected>All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div>';

	// course development
	htmlcont_2 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business " selected>Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Delivery Method</label><select class="input select"><option value=""></option><option value="Online" selected="">Online</option><option value="Blended or Hybrid">Blended or Hybrid</option><option value="On-ground">On-ground</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select><option value=""></option><option value="Global" selected="">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English" selected="">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Length</label><select class="input select"><option value=""></option><option value="Mini Term">Mini Term</option><option value="Ongoing ">Ongoing </option><option value="Quarter ">Quarter </option><option value="Semester ">Semester </option><option value="Summer ">Summer </option><option value="Trimester" selected>Trimester</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Credit</label><select class="input select"><option value=""></option><option value="1">1 </option><option value="2">2 </option><option value="3" selected="">3 </option><option value="4">4 </option><option value="other">Other </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Level</label><select class="input select"><option value=""></option><option value="Certificate ">Certificate </option><option value="Associates ">Associates </option><option value="Undergraduate " selected="">Undergraduate </option><option value="Graduate ">Graduate </option><option value="Masters ">Masters </option><option value="Doctoral ">Doctoral </option></select></div></div>';

	//curriculum development
	htmlcont_3 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business ">Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Delivery Method</label><select class="input select"><option value=""></option><option value="Online" >Online</option><option value="Blended or Hybrid">Blended or Hybrid</option><option value="On-ground">On-ground</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Level</label><select class="input select"><option value=""></option><option value="Certificate ">Certificate </option><option value="Associates ">Associates </option><option value="Undergraduate ">Undergraduate </option><option value="Graduate ">Graduate </option><option value="Masters ">Masters </option><option value="Doctoral ">Doctoral </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Credit</label><select class="input select"><option value=""></option><option value="1">1 </option><option value="2">2 </option><option value="3" >3 </option><option value="4">4 </option><option value="other">Other </option></select></div></div>';

	// study abroad - other
	htmlcont_4 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business ">Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div>';

	switch(values){
		case "":
		case "Academic Journal":
		case "Best Practices":
		case "General Publication":
		case "Mentorship":
		case "Peer Review":
		case "Research":
			jQuery("#wrap-project-type").html(htmlcont_1); break;

		case "Course Development":
			jQuery("#wrap-project-type").html(htmlcont_2); break;

		case "Curriculum Development":
			jQuery("#wrap-project-type").html(htmlcont_3); break;

		case "Study Abroad":
		case "Other":
			jQuery("#wrap-project-type").html(htmlcont_4); break;
	}


}

function onlyNumber(e){
    key = (document.all) ? e.keyCode : e.which;

    if (key==8 || key==127 || key==9 || key==39|| key==37){
        return true;
    }

    patron =/[(,),0-9,+,-]/;
    key_final = String.fromCharCode(key);
    return patron.test(key_final);
}

function discipline_1(option){
	if(option != "")
		jQuery("#select_discipline_2").removeAttr("disabled");
	else{
		jQuery("#select_discipline_2").attr("disabled",true);
		jQuery("#select_discipline_2").prop("selectedIndex", 0);
		jQuery("#select_discipline_3").prop("selectedIndex", 0);
	}
}
function discipline_2(option){
	if(option != "")
		jQuery("#select_discipline_3").removeAttr("disabled");
	else{
		jQuery("#select_discipline_3").attr("disabled",true);
		jQuery("#select_discipline_3").prop("selectedIndex", 0);
	}
}
function collaboration_type(option){
	if(option == ""){
		jQuery("#select_region_1").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}

	if(option == "Departmental" || option == "Institutional" || option == "Regional"){
		document.getElementById("select_region_1").selectedIndex = "7";

		jQuery("#select_region_1").attr("disabled",true);

		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}else
		if(option == "Global"){
			jQuery("#select_region_1").removeAttr("disabled").prop("selectedIndex", 0);
			jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
			jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
			jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
		}
}

function region_1(option){
	if(option != ""){
		jQuery("#select_region_2").removeAttr("disabled").prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
	else{
		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function region_2(option){
	if(option != ""){
		jQuery("#select_region_3").removeAttr("disabled").prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
	else{
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function region_3(option){
	if(option != "")
		jQuery("#select_region_4").removeAttr("disabled").prop("selectedIndex", 0);
	else{
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function remove_row(row){
	jQuery("#Project_Invites_" + row).remove();
}

function decline_row(row){
	if(confirm('Are you sure to decline?'))
		jQuery("#Project_Invites_" + row).remove();
}
