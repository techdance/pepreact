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
  });
  console.log(response);
  console.log("Status : " + response.status);
  console.log("Content Type: " + response.headers.get("Content-Type"));
  console.log("Date: " + response.headers.get("Date"));

  console.log("Status Text : " + response.statusText);
  console.log("Type : " + response.type);
  console.log("URL : " + response.url);

  // return response.json(); // parses JSON response into native JavaScript objects
  return response.json();
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

    event.preventDefault();
    postData(
      "http://localhost:8000/api/institution-profile?" +
        new URLSearchParams({
          id: B64Encode("1"),
          academicCalendar: B64Encode(institution.Overview.academicCalendar),
          foundedYear: B64Encode(institution.Overview.foundedYear),
          description: B64Encode(institution.Overview.description1),
          president: B64Encode(institution.Overview.president),
          employees: B64Encode(institution.Overview.employees),
          alumni: B64Encode(institution.Overview.alumni),
        })
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

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
