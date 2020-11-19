import React from "react";

//  Used for the modal triggered on clicking "View More" link
import AreaInterestModal from "../Shared/areaInterestModal.js";
import AreaInterestModalEdit from "../Shared/areaInterestModalEdit.js";

class EditProfileCollaborationInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.areaofinterest_list;

    // initialize states to match current values of links in the "areaofinterest_list" data object.

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let areaofinterest_list = this.state;
    areaofinterest_list[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    let areaofinterest_list = this.state;
    areaofinterest_list[field] = value;
    this.setState({ [field]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };

  handleChangeTelephone = (field, number) => {
    let telephone = number.target.value;
    const regexp = /^[0-9-+ \b]+$/;

    // if value is not blank, then test the regex
    if (telephone === "" || regexp.test(telephone)) {
      //  set local state
      let areaofinterest_list = this.state;
      areaofinterest_list[field] = telephone;
      this.setState({ [field]: telephone });

      /// pass current state up to parent to propogate changes
      this.props.onChange("areaofinterest_list", areaofinterest_list);
    }
  };

  addNewAreaOfInterest = (index, value) => {
    // index is not useful but the function needs to match passChangeUp arguments
    let areaofinterest_list = this.state;
    areaofinterest_list.push(value); // push new area of interest to the end of the array

    // pass the updated area of interest list back up to parent component
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };

  passChangeUp = (index, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component
    // in this case, the child component is a modal that contains one element of the areaofinterest_list array
    //  so it passes up the index instead of the field name.

    //  update local state wth changes from child component
    let areaofinterest_list = this.state;
    areaofinterest_list[index] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };

  render() {
    const randomIndex = Math.floor(Math.random() * 100000) + 9999;

    var blankAreaOfInterest = {
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
    };

    return (
      <>
        <div class="col-lg-6 mb-4">
          <div class="collaboration box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead mw-100">
                  <span class="icon-regular icon-comment-smile"></span>{" "}
                  Collaboration Interests
                </h2>
              </div>
              <div class="box-middle">
                <div class="row row-custom">
                  <div class="col-md-12">
                    <h4 class="mb-3">
                      <span class="icon-regular icon-s-search pr-3"></span>{" "}
                      Areas of interest
                      <i
                        class="fa fa-info-circle icon-info cl-blue"
                        aria-hidden="true"
                      >
                        <span class="info-toltip">
                          Click "Learn More" to learn about CollaboratED
                          Projects in our Resources section.
                        </span>
                      </i>
                    </h4>
                    <div class="row">
                      {this.props.areaofinterest_list.map(
                        (areaofinterest, index) => (
                          <div class="col-md-6" id="areas-of-interest-1">
                            <div class="areas-of-interest">
                              <div class="row row-custom position-relative">
                                <span class="left-corner">{index + 1}</span>
                                <div class="col-md-8">
                                  <p>
                                    <strong>Project</strong>
                                    <br />
                                    <small>{areaofinterest.projectType}</small>
                                  </p>
                                  <p>
                                    <strong>Preferred Language</strong>
                                    <br />
                                    <small>
                                      {areaofinterest.preferredLanguage}
                                    </small>
                                  </p>
                                </div>
                                <div class="col-md-4">
                                  <p>
                                    <strong>Discipline</strong>
                                    <br />
                                    <small>{areaofinterest.discipline} </small>
                                  </p>
                                  <p>
                                    <strong>Region</strong>
                                    <br />
                                    <small>{areaofinterest.region} </small>
                                  </p>
                                </div>
                              </div>
                              <div class="row row-custom mt-2">
                                <div class="col-md-12 d-flex justify-content-between">
                                  <div class="text-center">
                                    <a
                                      href="#0"
                                      data-toggle="modal"
                                      // data target is the same as ID used to create modal in AreaInterestModal class component.

                                      data-target={"#areaInterestModal" + index}
                                    >
                                      View more
                                    </a>
                                  </div>
                                  {/* Shows modal if the View More link is clicked.  */}
                                  <AreaInterestModal
                                    modal={areaofinterest}
                                    id={index}
                                    editMode="true"
                                  />
                                  <div class="text-center">
                                    <a
                                      href="#0"
                                      data-id="1"
                                      class="remove-interest"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                  {/* Edit modal if the Edit button on the View Modal is clicked.  */}
                                  <AreaInterestModalEdit
                                    areaOfInterest={areaofinterest}
                                    index={index}
                                    onChange={this.passChangeUp}
                                  />
                                </div>
                              </div>

                              {/* <!-- Modal what type of  project --> */}
                            </div>
                            {/* <!-- areas of interest --> */}
                          </div>
                        )
                      )}
                    </div>
                    <div class="mb-2 mt-2">
                      <a href="#0" class="btn btn-blue btn-w-100 mr-1">
                        Learn More
                      </a>
                      <a
                        href="#0"
                        data-toggle="modal"
                        data-target={"#areaInterestModalEdit" + randomIndex}
                        class="btn btn-blue btn-w-100"
                      >
                        Add
                      </a>
                    </div>
                    {/*If the Add button is clicked pass
                          a blank areaofinterest data structure
                           the randomIndex to identify the modal code
                           a new onChange function to add the new structure to the end of areaofinterest_list */}
                    <AreaInterestModalEdit
                      areaOfInterest={blankAreaOfInterest}
                      index={randomIndex}
                      onChange={this.addNewAreaOfInterest}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END COL --> */}
      </>
    );
  }
}

export default EditProfileCollaborationInterests;
