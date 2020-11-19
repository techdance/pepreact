import React from "react";

// globals
const maxProfessionalMemberships = 3;
const maxCertificates = 2;

class EditProfileCredentialsProfessionalMemberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionalMemberships: this.props.professionaMemberships,
      tempProfessionalMemberships: [],
    };

    let { professionalMemberships } = this.state;

    // structure to maintain status of certificate entry fields
    // iconValue repesent whether the oranga icon is a plus or minus
    //  certificate contains the last value from the professionalMemberships array passed as props to the class
    //  so that the informaion is retained if user clicks "minus" on a valid certificate and wants it back.
    var i;
    for (i = 0; i < maxProfessionalMemberships; i++) {
      if (i < professionalMemberships.length) {
        this.state.tempProfessionalMemberships.push({
          iconValue: "minus",
          professionaMembership: professionalMemberships[i],
        });
      } else {
        this.state.tempProfessionalMemberships.push({
          iconValue: "plus",
          professionaMembership: "",
        });
      }
    }

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (index, event) => {
    // function that handles clicks on the icons next to certificate fields

    let { professionalMemberships, tempProfessionalMemberships } = this.state;

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (tempProfessionalMemberships[index].iconValue === "minus") {
      tempProfessionalMemberships[index].professionaMembership =
        professionalMemberships[index].name;
      tempProfessionalMemberships[index].iconValue = "plus";
      professionalMemberships[index].name = "";
    } else {
      professionalMemberships[index] = {
        name: tempProfessionalMemberships[index].professionaMembership,
        link: "#0",
      };
      tempProfessionalMemberships[index].iconValue = "minus";
    }

    this.setState({ professionalMemberships: professionalMemberships });
    this.setState({ tempProfessionalMemberships: tempProfessionalMemberships });
    /// pass current state up to parent to propogate changes
    this.props.onChange("professionalMemberships", professionalMemberships);
  };

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Set state
    let { professionalMemberships } = this.state;
    professionalMemberships[name].link = "#0";
    professionalMemberships[name].name = value;
    this.setState({ professionalMemberships: professionalMemberships });

    /// pass current state up to parent to propogate changes
    this.props.onChange("professionalMemberships", professionalMemberships);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let { professionalMemberships, tempProfessionalMemberships } = this.state;

    return (
      <>
        <h4 className="mb-3">
          <span className="icon-regular icon-trophy-alt"></span> Professional
          Memberships
        </h4>

        {professionalMemberships.map((membership, index) => (
          <div className="form-group">
            <label>Membership &ndash; {index + 1}</label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-membership"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.handleClick(index, e)}
              >
                {tempProfessionalMemberships[index].iconValue === "plus" ? (
                  <i class="fas fa-plus-circle"></i>
                ) : (
                  <i class="fas fa-minus-circle"></i>
                )}
              </a>
              {tempProfessionalMemberships[index].iconValue === "plus" ? (
                ""
              ) : (
                <input
                  type="text"
                  name={index}
                  value={membership.name}
                  className="input"
                  onChange={this.handleArrayChange}
                />
              )}
            </div>
          </div>
        ))}
        {/* if less than maxProfessionalMemberships then show plus icon to add one */}
        {professionalMemberships.length < maxProfessionalMemberships ? (
          <div className="form-group">
            <label>
              Membership &ndash; {professionalMemberships.length + 1}
            </label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-membership"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) =>
                  this.handleClick(professionalMemberships.length, e)
                }
              >
                <i class="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

class EditProfileCredentialsCertificates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: this.props.certificates,
      tempCertificates: [],
    };

    let { certificates } = this.state;

    // structure to maintain status of certificate entry fields
    // iconValue repesent whether the oranga icon is a plus or minus
    //  certificate contains the last value from the certificates array passed as props to the class
    //  so that the informaion is retained if user clicks "minus" on a valid certificate and wants it back.
    var i;
    for (i = 0; i < maxCertificates; i++) {
      if (i < certificates.length) {
        this.state.tempCertificates.push({
          iconValue: "minus",
          certificate: certificates[i],
        });
      } else {
        this.state.tempCertificates.push({
          iconValue: "plus",
          certificate: "",
        });
      }
    }

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (index, event) => {
    // function that handles clicks on the icons next to certificate fields

    let { certificates, tempCertificates } = this.state;

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (tempCertificates[index].iconValue === "minus") {
      tempCertificates[index].certificate = certificates[index];
      tempCertificates[index].iconValue = "plus";
      certificates[index] = "";
    } else {
      certificates[index] = tempCertificates[index].certificate;
      tempCertificates[index].iconValue = "minus";
    }

    this.setState({ certificates: certificates });
    this.setState({ tempCertificates: tempCertificates });
  };

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Set state
    let { certificates } = this.state;
    certificates[name] = value;
    this.setState({ certificates: certificates });

    /// pass current state up to parent to propogate changes
    this.props.onChange("certificates", certificates);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let { certificates, tempCertificates } = this.state;

    return (
      <div className="col-md-6">
        <h4 className="mb-3">
          <span className="icon-regular icon-file-certificate"></span>{" "}
          Certificates
        </h4>

        {certificates.map((certificate, index) => (
          <div className="form-group">
            <label>Certificate - {index + 1}</label>
            <>
              <div className="d-flex">
                <a
                  href="#0"
                  // id="add-certificate"
                  className="cl-asset-type-d cl-hover-black font20 mr-1"
                  onClick={(e) => this.handleClick(index, e)}
                >
                  {tempCertificates[index].iconValue === "plus" ? (
                    <i class="fas fa-plus-circle"></i>
                  ) : (
                    <i class="fas fa-minus-circle"></i>
                  )}
                </a>
                {tempCertificates[index].iconValue === "plus" ? (
                  ""
                ) : (
                  <input
                    type="text"
                    name={index}
                    value={certificate}
                    className="input"
                    onChange={this.handleArrayChange}
                  />
                )}
              </div>
            </>
          </div>
        ))}

        {/* if less than maxCertificates then show plus icon to add one */}
        {certificates.length < maxCertificates ? (
          <div className="form-group">
            <label>Certificate - {certificates.length + 1}</label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-certificate"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.handleClick(certificates.length, e)}
              >
                <i class="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

class EditProfileCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.credentials;

    // initialize states to match current values of links in the "credentials" data object.
    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let credentials = this.state;
    credentials[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("credentials", credentials);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let credentials = this.state;
    credentials[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("credentials", credentials);
  };

  render() {
    const {
      educationLevel,
      professionalMemberships,
      certificates,
    } = this.state;

    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="credentials box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-id-card"></span>{" "}
                  Credentials
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <h4 className="mb-1">
                      <label>
                        <span className="icon-regular icon-user-graduate"></span>{" "}
                        Highest Education Level
                      </label>
                    </h4>
                    <div className="form-group mb-3">
                      <div className="d-flex">
                        <input
                          type="text"
                          name="educationLevel"
                          value={educationLevel}
                          className="input"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <EditProfileCredentialsProfessionalMemberships
                      professionaMemberships={professionalMemberships}
                      onChange={this.passChangeUp}
                    />
                  </div>
                  <EditProfileCredentialsCertificates
                    certificates={certificates}
                    onChange={this.passChangeUp}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditProfileCredentials;
