import React from "react";

import EditInstitutionOverview from "./editInstitutionProfileOverview.js";
import EditInstitutionContactInfo from "./editInstitutionProfileContactInfo.js";
import EditInstitutionStudentBodyInfo from "./editInstitutionProfileStudentBodyInfo.js";
import EditInstitutionFacultyInfo from "./editInstitutionProfileFacultyInfo.js";
import EditInstitutionAcademic from "./editInstitutionProfileAcademic.js";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((response) => response.json());

  return response;
}

function B64Encode($string) {
  return Buffer.from($string).toString("base64");
}

class EditInstitutionProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.institution;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let institution = this.state;
    institution[name] = value;
    this.setState({ institution });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("institution", institution);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let institution = this.state;
    institution[field] = value;
    this.setState({ institution });
  };

  handleSubmit = (event) => {
    let institution = this.state;

    // special handling of social media links when <Save> button is clicked
    // there are two relevant fields in the Overview object referenced
    //    social media link such as "facebookLink" or "twitterLink" that contain the institution's url
    //    social media icon which refers to the "plus/minus" control in the user interface.
    // if the social media icon is "plus", then the social media link needs to be set to null at this point.
    //    social media link is kept before <Save> is submitted so that it can show if user clicks "plus" again.
    // if the social media icon is "minus", then the social media link is left as set by the user
    //    this could mean that social media icon is "minus" and the social media link is null
    if (institution.Overview.fbLinkIcon === "plus")
      institution.Overview.facebookLink = null;
    if (institution.Overview.twLinkIcon === "plus")
      institution.Overview.twitterLink = null;
    if (institution.Overview.igLinkIcon === "plus")
      institution.Overview.instagramLink = null;
    if (institution.Overview.liLinkIcon === "plus")
      institution.Overview.linkedinLink = null;
    if (institution.Overview.ytLinkIcon === "plus")
      institution.Overview.youtubeLink = null;

    this.setState({ institution: institution });

    event.preventDefault();
    postData(
      "http://localhost:8000/api/institution-profile?" +
        new URLSearchParams({
          id: B64Encode("1"),
          // ** Currently sending all fields via the body of the request. Leave commented code until we decide how we will transmit to API Backend.
          // academicCalendar: B64Encode(institution.Overview.academicCalendar),
          // foundedYear: B64Encode(institution.Overview.foundedYear),
          // description: B64Encode(institution.Overview.description1),
          // president: B64Encode(institution.Overview.president),
          // employees: B64Encode(institution.Overview.employees),
          // alumni: B64Encode(institution.Overview.alumni),
          // phone: B64Encode(institution.ContactInfo.phone),
          // name1: B64Encode(institution.ContactInfo.address.name1),
        }),
      institution // send entire object encoded as JSON in body of the request
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    // if data contains field called "status" and set to 200, then ok, if not then error conditions are returned as an array of values.

    // this.state contains the current revised version of the institution object so should store to institution data.
  };

  render() {
    const {
      Overview,
      ContactInfo,
      StudentBodyInfo,
      FacultyInfo,
      Academic,
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <EditInstitutionOverview
            Overview={Overview}
            onChange={this.passChangeUp}
          />

          <section className="wrap-profile">
            <div className="row row-custom ">
              <div className="col-lg-12">
                <div className="row row-custom sortable">
                  <EditInstitutionContactInfo
                    ContactInfo={ContactInfo}
                    onChange={this.passChangeUp}
                  />
                </div>
                <EditInstitutionStudentBodyInfo
                  StudentBodyInfo={StudentBodyInfo}
                  onChange={this.passChangeUp}
                />
                <EditInstitutionFacultyInfo
                  FacultyInfo={FacultyInfo}
                  onChange={this.passChangeUp}
                />

                {/* "Save" button is buried in this last section. Not sure why. */}
                <EditInstitutionAcademic
                  Academic={Academic}
                  onChange={this.passChangeUp}
                />
              </div>
            </div>
          </section>
        </form>
      </>
    );
  }
}

export default EditInstitutionProfileForm;
