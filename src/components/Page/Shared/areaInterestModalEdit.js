import React from "react";
import Select from "react-select";

import { disciplineList } from "../../../data/disciplines.js";
import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";
import { deliveryMethodList } from "../../../data/deliveryMethod.js";
import { collaborationTypeList } from "../../../data/collaborationType.js";
import { regionList } from "../../../data/regions.js";
import { languageList } from "../../../data/languages.js";
import { programLengthList } from "../../../data/programLength.js";
import { creditList } from "../../../data/credit.js";
import { programLevelList } from "../../../data/programLevel.js";

class AreaInterestModalEdit extends React.Component {
  constructor(props) {
    // state holds the current state of array element from areaofinterest_list and the index in the array.
    //  so, state.areaOfInterest = areaofinterest_list[index]

    super(props);

    this.state = {
      areaOfInterest: {
        projectType: "",
        description: "",
        discipline: "",
        deliveryMethod: "",
        collaborationType: "",
        region: "",
        programLength: "",
        preferredLanguage: "",
        credits: "",
        programLevel: "",
        dateRange: "",
        created: false,
      },
      index: 0,
    };

    this.state.areaOfInterest = this.props.areaOfInterest;
    this.state.index = this.props.index;

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSingleSelect = this.handleChangeSingleSelect.bind(this);
    this.saveModalChanges = this.saveModalChanges.bind(this);
  }

  saveModalChanges(event) {
    // Save button is clicked so pass up the changes made locally on this modal

    event.preventDefault();

    // save all changes made locally in the modal back to the parent component
    this.props.onChange(this.state.index, this.state.areaOfInterest);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let areaofinterest = this.state.areaOfInterest;
    areaofinterest[name] = value;
    this.setState({ areaOfInterest: areaofinterest }); // lower case contains the changed value

    // Hold all changes locally until Save button is clicked and invoke saveModelChanges() function.
  };

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    let areaofinterest = this.state.areaOfInterest;
    areaofinterest[field] = value;
    this.setState({ areaOfInterest: areaofinterest }); // lower case contains the changed value

    // Hold all changes locally until Save button is clicked and invoke saveModelChanges() function.
  };

  render() {
    const {
      projectType,
      description,
      discipline,
      deliveryMethod,
      collaborationType,
      region,
      programLength,
      preferredLanguage,
      credits,
      programLevel,
      dateRange,
      created,
    } = this.state.areaOfInterest;

    const index = this.state.index;

    return (
      <div
        class="modal fade modalToltip"
        id={"areaInterestModalEdit" + index}
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div
                id="add-interest-modal"
                class="font14 interest-modal bg-grey no-border"
              >
                <div class="view-more-interest-modal-inner position-relative">
                  <div class="toltip-close2">
                    <a href="#0" data-dismiss="modal">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                  <div class="view-more-interest-modal-inner-content w-100">
                    <div class="row mb-2">
                      <div class="col-md-12">
                        <div class="form-group w-100">
                          <label>Project</label>
                          <Select
                            options={projectTypeList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("projectType", e)
                            }
                            value={{
                              value: projectType,
                              label: projectType,
                            }}
                            isSearchable="true"
                          />
                        </div>

                        <div class="form-group">
                          <label>Description:</label>
                          <textarea
                            className="input textarea"
                            style={{
                              height: "65px",
                              minHeight: "auto",
                            }}
                            rows="3"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div id="wrap-project-type" class="row mb-2">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Discipline:</label>

                          <Select
                            options={disciplineList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("discipline", e)
                            }
                            value={{
                              value: discipline,
                              label: discipline,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Delivery Method</label>
                          <Select
                            options={deliveryMethodList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("deliveryMethod", e)
                            }
                            value={{
                              value: deliveryMethod,
                              label: deliveryMethod,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Collaboration Type</label>
                          <Select
                            options={collaborationTypeList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect(
                                "collaborationType",
                                e
                              )
                            }
                            value={{
                              value: collaborationType,
                              label: collaborationType,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Region:</label>
                          <Select
                            options={regionList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("region", e)
                            }
                            value={{
                              value: region,
                              label: region,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Preferred Language</label>
                          <Select
                            options={languageList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect(
                                "preferredLanguage",
                                e
                              )
                            }
                            value={{
                              value: preferredLanguage,
                              label: preferredLanguage,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Program Length</label>
                          <Select
                            options={programLengthList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("programLength", e)
                            }
                            value={{
                              value: programLength,
                              label: programLength,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Credit</label>
                          <Select
                            options={creditList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("credits", e)
                            }
                            value={{
                              value: credits,
                              label: credits,
                            }}
                            isSearchable="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Program Level</label>
                          <Select
                            options={programLevelList}
                            className="input select"
                            classNamePrefix="select"
                            onChange={(e) =>
                              this.handleChangeSingleSelect("programLevel", e)
                            }
                            value={{
                              value: programLevel,
                              label: programLevel,
                            }}
                            isSearchable="true"
                          />
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
                      <a
                        href="#0"
                        class="btn btn-blue btn-w-100 m-auto"
                        data-dismiss="modal"
                        onClick={this.saveModalChanges}
                      >
                        Save
                      </a>
                    </div>
                    <div class="row text-center">
                      <div class="col-md-12 ac mt-3">
                        <div class="mt-2">Created: 2019-10-31</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AreaInterestModalEdit;
