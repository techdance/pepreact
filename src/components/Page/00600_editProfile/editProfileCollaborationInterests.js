import React from "react";

//  Used for the modal triggered on clicking "View More" link
import AreaInterestModal from "../Shared/areaInterestModal.js";
import AreaInterestModalEdit, {
  AreaInterestModalAdd,
} from "../Shared/areaInterestModalEdit.js";

import AreaofInterest from "../../../classes/AreaofInterest.jsx";
import { removeFromArray } from "../Shared/usefulFunctions.js";
import { ConfirmModal } from "../Shared/UI/MessageModal";
import ModalPortal from "../Shared/UI/ModalPortal";

class EditProfileCollaborationInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaofinterest_list: this.props.areaofinterest_list,
      currentIndex: 0,
    };

    // initialize states to match current values of links in the "areaofinterest_list" data object.

    this.passChangeUp = this.passChangeUp.bind(this);
    this.addNewAreaOfInterest = this.addNewAreaOfInterest.bind(this);
    this.removeAreaOfInterest = this.removeAreaOfInterest.bind(this);
    this.showConfirmDeleteModal = this.showConfirmDeleteModal.bind(this);
  }

  addNewAreaOfInterest = (index, value) => {
    // index is not useful but the function needs to match passChangeUp arguments
    let { areaofinterest_list } = this.state;
    areaofinterest_list.push(value); // push new area of interest to the end of the array

    // pass the updated area of interest list back up to parent component
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };

  showConfirmDeleteModal(index) {
    this.setState({ currentIndex: index });

    /* global $ */
    this.$confirmDeleteModal = $(this.confirmDeleteModal);
    this.$confirmDeleteModal.modal("toggle");
  }

  removeAreaOfInterest = (confirm) => {
    if (confirm) {
      const { currentIndex } = this.state;
      let { areaofinterest_list } = this.state;
      areaofinterest_list = removeFromArray(areaofinterest_list, currentIndex);
      this.props.onChange("areaofinterest_list", areaofinterest_list);
    }
  };

  passChangeUp = (index, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component
    // in this case, the child component is a modal that contains one element of the areaofinterest_list array
    //  so it passes up the index instead of the field name.

    //  update local state wth changes from child component
    let { areaofinterest_list } = this.state;
    areaofinterest_list[index] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("areaofinterest_list", areaofinterest_list);
  };


  // componentWillReceiveProps(nextProps){
  //   if (this.state?.areaofinterest_list !== nextProps?.areaofinterest_list) {
  //       this.setState({ areaofinterest_list: nextProps.areaofinterest_list });
     
  //   }
  // }


  render() {
    const randomIndex = Math.floor(Math.random() * 100000) + 9999;

    // console.log(' this.state: ', this.state);
    console.log(' this.props: ', this.props);
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="collaboration box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-comment-smile"></span>{" "}
                  Collaboration Interests
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-12">
                    <h4 className="mb-3">
                      <span className="icon-regular icon-s-search pr-3"></span>{" "}
                      Areas of interest
                      <i
                        className="fa fa-info-circle icon-info cl-blue"
                        aria-hidden="true"
                      >
                        <span className="info-toltip">
                          Click "Learn More" to learn about CollaboratED
                          Projects in our Resources section.
                        </span>
                      </i>
                    </h4>
                    <div className="row">
                      {this.props?.areaofinterest_list?.map(
                        (areaofinterest, index) => (
                          <div
                            className="col-md-6"
                            id="areas-of-interest-1"
                            key={index}
                          >
                            <div className="areas-of-interest">
                              <div className="row row-custom position-relative">
                                <span className="left-corner">{index + 1}</span>
                                <div className="col-md-8">
                                  <p>
                                    <strong>Project</strong>
                                    <br />
                                    <small>{areaofinterest?.projectType}</small>
                                  </p>
                                  <p>
                                    <strong>Preferred Language</strong>
                                    <br />
                                    <small>
                                      {areaofinterest.preferredLanguage}
                                    </small>
                                  </p>
                                </div>
                                <div className="col-md-4">
                                  <p>
                                    <strong>Discipline</strong>
                                    <br />
                                    <small>{areaofinterest?.discipline} </small>
                                  </p>
                                  <p>
                                    <strong>Region</strong>
                                    <br />
                                    <small>{areaofinterest?.region} </small>
                                  </p>
                                </div>
                              </div>
                              <div className="row row-custom mt-2">
                                <div className="col-md-12 d-flex justify-content-between">
                                  <div className="text-center">
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
                                  <div className="text-center">
                                    <a
                                      href="#0"
                                      data-id="1"
                                      className="remove-interest"
                                      onClick={(event) => {
                                        this.showConfirmDeleteModal(index);
                                      }}
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
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="mb-2 mt-2">
                      <a href="#0" className="btn btn-blue btn-w-100 mr-1">
                        Learn More
                      </a>
                      <a
                        href="#0"
                        data-toggle="modal"
                        data-target={"#areaInterestModalEdit" + randomIndex}
                        className="btn btn-blue btn-w-100"
                      >
                        Add
                      </a>
                    </div>
                    {/*If the Add button is clicked pass
                          a blank areaofinterest data structure
                           the randomIndex to identify the modal code
                           a new onChange function to add the new structure to the end of areaofinterest_list */}
                    {/* <AreaInterestModalEdit
                      areaOfInterest={blankAreaOfInterest}
                      index={randomIndex}
                      onChange={this.addNewAreaOfInterest}
                    /> */}
                    <AreaInterestModalAdd
                      areaofInterest={new AreaofInterest()}
                      index={randomIndex}
                      onChange={this.addNewAreaOfInterest}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalPortal>
          <ConfirmModal
            modalID="confirmDelete"
            modalRef={(el) => (this.confirmDeleteModal = el)}
            modalMsg="Are you sure you want to delete this Area of Interest?"
            confirmCallBack={this.removeAreaOfInterest}
          />
        </ModalPortal>
      </>
    );
  }
}

export default EditProfileCollaborationInterests;
