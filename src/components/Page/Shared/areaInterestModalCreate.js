import React from "react";
import $ from "jquery";


class AreaInterestModalCreate extends React.Component {


 render() {
  
 
 
     let styleContainer = {
       "background-color":"rgba(129, 140, 147, 0.9)"
     }
     let textariaStyle = {
         "height": "65px",
         "min-height": "auto"
        }

 

    return (
        <div class="modal fade modalToltip" id={"areaInterestModalCreate1"} 
        tabindex="-2" role="dialog" 
        aria-labelledby="modalLabel"
        aria-hidden="true">

        <div class="modal-dialog" role="document" style={styleContainer}>
          <div class="modal-content">
              <div class="modal-body">
                  <div id="add-interest-modal" class="font14 interest-modal bg-grey no-border">
                      <div class="view-more-interest-modal-inner position-relative">
                          <div class="toltip-close2">
                              <a href="javascript:void(0);" data-dismiss="modal"><i class="fa fa-times-circle"></i></a>
                          </div>
                          <div class="view-more-interest-modal-inner-content w-100">
                              <div class="row mb-2">
                                  <div class="col-md-12">
                                      <div class="form-group w-100">
                                          <label>What type of project are you interest in?</label>
                                          <select onchange="project_type(this.value)" class="input select">
                                              <option value="Select a Project">Select a Project</option>
                                              <option value=""></option>
                                              <option value="Academic Journal">Academic Journal</option>
                                              <option value="Best Practices">Best Practices</option>
                                              <option value="Course Development">Course Development</option>
                                              <option value="Curriculum Development">Curriculum Development</option>
                                              <option value="General Publication">General Publication</option>
                                              <option value="Mentorship">Mentorship</option>
                                              <option value="Peer Review">Peer Review</option>
                                              <option value="Research">Research</option>
                                              <option value="Study Abroad">Study Abroad</option>
                                              <option value="Other">Other</option>
                                          </select>
                                      </div>

                                      <div class="form-group">
                                          <label>Description:</label>
                                          <textarea class="input textarea" style={textariaStyle}>
I would like to co-develop a business ethics class focused on multinational corporations 
and how ethics may or may not conflict with the culture in countries where MNCs are located.</textarea>
                                      </div>
                                  </div>
                              </div>
                              <div id="wrap-project-type" class="row mb-2">
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Preferred Language</label>
                                          <select class="input select">
                                              <option value=""></option>
                                              <option value="English">English</option>

                                              <option value="Arabic ">Arabic </option>
                                              <option value="Bengali  ">Bengali  </option>
                                              <option value="French ">French </option>
                                              <option value="Hindi ">Hindi </option>
                                              <option value="Japanese ">Japanese </option>
                                              <option value="Mandarin ">Mandarin </option>
                                              <option value="Norwegian ">Norwegian </option>
                                              <option value="Punjabi ">Punjabi </option>
                                              <option value="Russian ">Russian </option>
                                              <option value="Spanish">Spanish</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Delivery Method</label>
                                          <select class="input select">
                                              <option value="">Online</option>
                                              <option value="">Blended</option>
                                              <option value="">On-Ground</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Collaboration Type</label>
                                          <select class="select input">
                                              <option value=""></option>
                                              <option value="Global">Global</option>

                                              <option value="Departmental">Departmental</option>
                                              <option value="Institutional">Institutional</option>
                                              <option value="Regional">Regional</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Region 1:</label>
                                          <select class="select input">
                                              <option value=""></option>
                                              <option value="All">All</option>
                                              <option value="Africa ">Africa </option>
                                              <option value="Asia ">Asia </option>
                                              <option value="Central America ">Central America </option>
                                              <option value="Europe ">Europe </option>
                                              <option value="Middle East ">Middle East </option>
                                              <option value="North America ">North America </option>
                                              <option value="Oceania ">Oceania </option>
                                              <option value="South America ">South America </option>
                                              <option value="The Caribbean ">The Caribbean </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Discipline 1:</label>
                                          <select class="input select">
                                              <option value="Anthropology ">Anthropology </option>
                                              <option value="Archaeology ">Archaeology </option>
                                              <option value="Arts ">Arts </option>
                                              <option value="Biology ">Biology </option>
                                              <option value="Business">Business </option>
                                              <option value="Chemistry ">Chemistry </option>
                                              <option value="Computer Science ">Computer Science </option>
                                              <option value="Earth Science ">Earth Science </option>
                                              <option value="Economics ">Economics </option>
                                              <option value="Engineering ">Engineering </option>
                                              <option value="History ">History </option>
                                              <option value="Human Geography ">Human Geography </option>
                                              <option value="Languages ">Languages </option>
                                              <option value="Law ">Law </option>
                                              <option value="Literature ">Literature </option>
                                              <option value="Mathematics ">Mathematics </option>
                                              <option value="Medicine and Health ">Medicine and Health </option>
                                              <option value="Philosophy ">Philosophy </option>
                                              <option value="Physics ">Physics </option>
                                              <option value="Political Science ">Political Science </option>
                                              <option value="Psychology ">Psychology </option>
                                              <option value="Sociology ">Sociology </option>
                                              <option value="Space Sciences ">Space Sciences </option>
                                              <option value="Statistics ">Statistics </option>
                                              <option value="Theology ">Theology </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Region 2:</label>
                                          <select class="select input">
                                              <option value=""></option>
                                              <option value="All">All</option>
                                              <option value="Africa ">Africa </option>
                                              <option value="Asia ">Asia </option>
                                              <option value="Central America ">Central America </option>
                                              <option value="Europe ">Europe </option>
                                              <option value="Middle East ">Middle East </option>
                                              <option value="North America ">North America </option>
                                              <option value="Oceania ">Oceania </option>
                                              <option value="South America ">South America </option>
                                              <option value="The Caribbean ">The Caribbean </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Discipline 2:</label>
                                          <select class="input select">
                                              <option value="Anthropology ">Anthropology </option>
                                              <option value="Archaeology ">Archaeology </option>
                                              <option value="Arts ">Arts </option>
                                              <option value="Biology ">Biology </option>
                                              <option value="Business">Business </option>
                                              <option value="Chemistry ">Chemistry </option>
                                              <option value="Computer Science ">Computer Science </option>
                                              <option value="Earth Science ">Earth Science </option>
                                              <option value="Economics ">Economics </option>
                                              <option value="Engineering ">Engineering </option>
                                              <option value="History ">History </option>
                                              <option value="Human Geography ">Human Geography </option>
                                              <option value="Languages ">Languages </option>
                                              <option value="Law ">Law </option>
                                              <option value="Literature ">Literature </option>
                                              <option value="Mathematics ">Mathematics </option>
                                              <option value="Medicine and Health ">Medicine and Health </option>
                                              <option value="Philosophy ">Philosophy </option>
                                              <option value="Physics ">Physics </option>
                                              <option value="Political Science ">Political Science </option>
                                              <option value="Psychology ">Psychology </option>
                                              <option value="Sociology ">Sociology </option>
                                              <option value="Space Sciences ">Space Sciences </option>
                                              <option value="Statistics ">Statistics </option>
                                              <option value="Theology ">Theology </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Region 3:</label>
                                          <select class="select input">
                                              <option value=""></option>
                                              <option value="All">All</option>
                                              <option value="Africa ">Africa </option>
                                              <option value="Asia ">Asia </option>
                                              <option value="Central America ">Central America </option>
                                              <option value="Europe ">Europe </option>
                                              <option value="Middle East ">Middle East </option>
                                              <option value="North America ">North America </option>
                                              <option value="Oceania ">Oceania </option>
                                              <option value="South America ">South America </option>
                                              <option value="The Caribbean ">The Caribbean </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Discipline 3:</label>
                                          <select class="input select">
                                              <option value="Anthropology ">Anthropology </option>
                                              <option value="Archaeology ">Archaeology </option>
                                              <option value="Arts ">Arts </option>
                                              <option value="Biology ">Biology </option>
                                              <option value="Business">Business </option>
                                              <option value="Chemistry ">Chemistry </option>
                                              <option value="Computer Science ">Computer Science </option>
                                              <option value="Earth Science ">Earth Science </option>
                                              <option value="Economics ">Economics </option>
                                              <option value="Engineering ">Engineering </option>
                                              <option value="History ">History </option>
                                              <option value="Human Geography ">Human Geography </option>
                                              <option value="Languages ">Languages </option>
                                              <option value="Law ">Law </option>
                                              <option value="Literature ">Literature </option>
                                              <option value="Mathematics ">Mathematics </option>
                                              <option value="Medicine and Health ">Medicine and Health </option>
                                              <option value="Philosophy ">Philosophy </option>
                                              <option value="Physics ">Physics </option>
                                              <option value="Political Science ">Political Science </option>
                                              <option value="Psychology ">Psychology </option>
                                              <option value="Sociology ">Sociology </option>
                                              <option value="Space Sciences ">Space Sciences </option>
                                              <option value="Statistics ">Statistics </option>
                                              <option value="Theology ">Theology </option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label>Region 4:</label>
                                          <select class="select input">
                                              <option value=""></option>
                                              <option value="All">All</option>
                                              <option value="Africa ">Africa </option>
                                              <option value="Asia ">Asia </option>
                                              <option value="Central America">Central America </option>
                                              <option value="Europe ">Europe </option>
                                              <option value="Middle East ">Middle East </option>
                                              <option value="North America ">North America </option>
                                              <option value="Oceania ">Oceania </option>
                                              <option value="South America ">South America </option>
                                              <option value="The Caribbean ">The Caribbean </option>
                                          </select>
                                      </div>
                                  </div>

                              </div>
                        {/* <!-- row --> */}

                              <div class="row mb-2">
                                  <div class="col-md-12">
                                      <strong>Project Date Range</strong>
                                      <div class="top-label-range">
                                          <div class="year-init-range">Today 2020</div>
                                          <div class="year-last-range">2021</div>
                                      </div>
                                      <div class="wrap-range">
                                          <input type="range" />
                                      </div>
                                      <div class="wrap-range-label width-inherit">
                                          <ul class="d-flex">
                                              <li>Jan</li>
                                              <li>Feb</li>
                                              <li>Mar</li>
                                              <li>May</li>
                                              <li>Jun</li>
                                              <li>Jul</li>
                                              <li>Aug</li>
                                              <li>Sep</li>
                                              <li>Oct</li>
                                              <li>Nov</li>
                                              <li>Dec</li>
                                              <li>Jan</li>
                                              <li>Feb</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <div class="row text-center pt-2">
                                  <a href="#" id="save-what-type" class="btn btn-blue btn-w-100 m-auto" data-dismiss="modal">Save</a>
                              </div>
                                                                                                              </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    )

 }

}   


export default AreaInterestModalCreate;