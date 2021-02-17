import React, { useReducer, useRef, useState } from "react";
import Select from "react-select";

// data objects for input selects
import { disciplineList } from "../../../data/disciplines.js";
import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";
import { deliveryMethodList } from "../../../data/deliveryMethod.js";
import { collaborationTypeList } from "../../../data/collaborationType.js";
import { regionList } from "../../../data/regions.js";
import { languageList } from "../../../data/languages.js";
import { programLengthList } from "../../../data/programLength.js";
import { creditList } from "../../../data/credit.js";
import { programLevelList } from "../../../data/programLevel.js";

import { reducer } from "../Shared/usefulFunctions";
import SimpleSelect from "../Shared/UI/SimpleSelect";
import CalendarSelector from "../Shared/UI/CalendarSelector";
import ModalPortal from "../Shared/UI/ModalPortal";
import MessageModal from "../Shared/UI/MessageModal";

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
        className="modal fade modalToltip"
        id={"areaInterestModalEdit" + index}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div
                id="add-interest-modal"
                className="font14 interest-modal bg-grey no-border"
              >
                <div className="view-more-interest-modal-inner position-relative">
                  <div className="toltip-close2">
                    <a href="#0" data-dismiss="modal">
                      <i className="fa fa-times-circle"></i>
                    </a>
                  </div>
                  <div className="view-more-interest-modal-inner-content w-100">
                    <div className="row mb-2">
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label>
                            What type of project are you interested in?
                          </label>
                          <Select
                            options={projectTypeList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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

                        <div className="form-group">
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
                    <div id="wrap-project-type" className="row mb-2">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Discipline:</label>

                          <Select
                            options={disciplineList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Delivery Method</label>
                          <Select
                            options={deliveryMethodList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Collaboration Type</label>
                          <Select
                            options={collaborationTypeList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Region:</label>
                          <Select
                            options={regionList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Preferred Language</label>
                          <Select
                            options={languageList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Program Length</label>
                          <Select
                            options={programLengthList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Credit</label>
                          <Select
                            options={creditList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Program Level</label>
                          <Select
                            options={programLevelList}
                            className="inputSelectModal"
                            classNamePrefix="rsModal"
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

                    <div className="row mb-2">
                      <div className="col-md-12">
                        <strong>Project Date Range</strong>
                        <div className="top-label-range">
                          <div className="year-init-range">Today 2020</div>
                          <div className="year-last-range">2021</div>
                        </div>
                        <div className="wrap-range">
                          <input type="range" />
                        </div>
                        <div className="wrap-range-label width-inherit">
                          <ul className="d-flex">
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
                    <div className="row text-center pt-2">
                      <a
                        href="#0"
                        className="btn btn-blue btn-w-100 m-auto"
                        data-dismiss="modal"
                        onClick={this.saveModalChanges}
                      >
                        Save
                      </a>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12 ac mt-3">
                        <div className="mt-2">Created: 2019-10-31</div>
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

// new modal design for Create Blank Interest Form - see ADO task 16485. This component is specific to that design.
//  Eventually, will need to modify AreaInterestModalEdit above to use this new design and combine the two components into one.
export function AreaInterestModalAdd(props) {
  const { areaofInterest, index, onChange } = props;

  const [aoi, setAOI] = useReducer(reducer, areaofInterest);
  const modalRefSaveConfirm = useRef(null);

  const saveModalChanges = (event) => {
    // Save button is clicked so pass up the changes made locally on this modal
    event.preventDefault();

    // backward compatibitity with old version of Create Interest Modal
    let saveAOI = aoi;
    saveAOI.discipline = aoi.discipline1;
    saveAOI.region = aoi.region1;

    // TODO - Update the create field in aoi
    // save all changes made locally in the modal back to the parent component
    onChange(index, saveAOI);

    // Confirm for the user that the changes have been saved.
    /* global $ */
    const $modalRef = $(modalRefSaveConfirm.current);
    $modalRef.modal("toggle");
  };

  const {
    projectType,
    description,
    discipline1,
    discipline2,
    discipline3,
    collaborationType,
    region1,
    region2,
    region3,
    region4,
    preferredLanguage,
    startDate,
    endDate,
    created,
  } = aoi;

  return (
    <div
      className="modal fade modalToltip"
      id={"areaInterestModalEdit" + index}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div
              id="add-interest-modal"
              className="font14 interest-modal bg-grey no-border"
            >
              <div className="view-more-interest-modal-inner position-relative">
                <div className="toltip-close2">
                  <a href="#0" data-dismiss="modal">
                    <i className="fa fa-times-circle"></i>
                  </a>
                </div>
                <div
                  className="view-more-interest-modal-inner-content w-100"
                  onChange={({ target: { name, value } }) =>
                    // handleChange(name, value)
                    setAOI({ name, value })
                  }
                >
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <div className="form-group w-100">
                        <label>What type of project are you interest in?</label>
                        <SimpleSelect
                          selectOptions={projectTypeList}
                          selectClass="input select"
                          selectName="projectType"
                          initialValue={projectType}
                          onChange={null} // don't need onChange at this level becase it's handle upstream.
                        />
                      </div>
                      <div className="form-group">
                        <label>Description:</label>

                        <textarea
                          className="input textarea"
                          style={{
                            height: "65px",
                            minHeight: "auto",
                          }}
                          name="description"
                          value={description}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div id="wrap-project-type" className="row mb-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Preferred Language</label>
                        <SimpleSelect
                          selectOptions={languageList}
                          selectClass="input select"
                          selectName="preferredLanguage"
                          initialValue={preferredLanguage}
                        />
                      </div>
                    </div>

                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Collaboration Type</label>
                        <SimpleSelect
                          selectOptions={collaborationTypeList}
                          selectClass="input select"
                          selectName="collaborationType"
                          initialValue={collaborationType}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Region 1:</label>
                        <SimpleSelect
                          selectOptions={regionList}
                          selectClass="input select"
                          selectName="region1"
                          initialValue={region1}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Discipline 1:</label>
                        <SimpleSelect
                          selectOptions={disciplineList}
                          selectClass="input select"
                          selectName="discipline1"
                          initialValue={discipline1}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Region 2:</label>
                        <SimpleSelect
                          selectOptions={regionList}
                          selectClass="input select"
                          selectName="region2"
                          initialValue={region2}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Discipline 2:</label>
                        <SimpleSelect
                          selectOptions={disciplineList}
                          selectClass="input select"
                          selectName="discipline2"
                          initialValue={discipline2}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Region 3:</label>
                        <SimpleSelect
                          selectOptions={regionList}
                          selectClass="input select"
                          selectName="region3"
                          initialValue={region3}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Discipline 3:</label>
                        <SimpleSelect
                          selectOptions={disciplineList}
                          selectClass="input select"
                          selectName="discipline3"
                          initialValue={discipline3}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Region 4:</label>
                        <SimpleSelect
                          selectOptions={regionList}
                          selectClass="input select"
                          selectName="region4"
                          initialValue={region4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-12">
                      <strong>Project Date Range</strong>

                      <div className="d-flex mt-1">
                        <div>
                          <label>Start Date</label>
                          <div className="wrap-input-calendar mr-3">
                            <CalendarSelector
                              id="startDate"
                              className={"form-control icon-cal datepicker"}
                              name="startDate"
                              value={startDate}
                              onChange={null} // component uses event bubbling to handle changes but CalendarSelector requires handlechange in props;
                            />
                          </div>
                        </div>
                        <div>
                          <label>End Date</label>
                          <div className="wrap-input-calendar">
                            <CalendarSelector
                              id="endDate"
                              className={"form-control icon-cal datepicker"}
                              name="endDate"
                              value={endDate}
                              onChange={null} // component uses event bubbling to handle changes but CalendarSelector requires handlechange in props;
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row text-center pt-2">
                    <a
                      href="#0"
                      id="save-what-type"
                      className="btn btn-blue btn-w-100 m-auto showMessageConfirmationModal"
                      data-dismiss="modal"
                      onClick={saveModalChanges}
                    >
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        <MessageModal
          modalMsg="Saved Successfully"
          modalRef={modalRefSaveConfirm}
          modalID={"saveConfirmationModal"}
        />
      </ModalPortal>
    </div>
  );
}
