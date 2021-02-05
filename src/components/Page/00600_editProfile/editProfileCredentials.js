import React from "react";
import { removeFromArray } from "../Shared/usefulFunctions";

// globals
const maxProfessionalMemberships = 3;
const maxCertificates = 3;

class EditProfileCredentialsProfessionalMemberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionalMemberships: this.props.professionaMemberships,
    };

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.removeMembership = this.removeMembership.bind(this);
    this.addMembership = this.addMembership.bind(this);
  }

  addMembership = (event) => {
    let { professionalMemberships } = this.state;

    if (professionalMemberships.length < maxProfessionalMemberships) {
      professionalMemberships.push({
        name: "",
        link: "#0",
      });

      this.setState({ professionalMemberships: professionalMemberships });
      /// pass current state up to parent to propogate changes
      this.props.onChange("professionalMemberships", professionalMemberships);
    }
  };

  removeMembership = (index, event) => {
    // function that handles clicks on the icons next to certificate fields

    let { professionalMemberships } = this.state;

    event.preventDefault();
    professionalMemberships = removeFromArray(professionalMemberships, index);
    this.setState({ professionalMemberships: professionalMemberships });
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
    let { professionalMemberships } = this.state;

    return (
      <div className="col-md-6">
        <h4 className="mb-3">
          <span className="icon-regular icon-trophy-alt"></span> Professional
          Memberships
          <a
            href="#0"
            className="cl-asset-type-d cl-hover-black font20 mr-1"
            onClick={(e) => this.addMembership(e)}
          >
            <i className="fas fa-plus-circle"></i>
          </a>
        </h4>

        {professionalMemberships.map((membership, index) => (
          <div className="form-group membership mb-4" key={index}>
            <div className="d-flex">
              <a
                href="#0"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.removeMembership(index, e)}
              >
                <i className="fas fa-minus-circle"></i>
              </a>

              <input
                type="text"
                name={index}
                value={membership.name}
                className="input"
                onChange={this.handleArrayChange}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class EditProfileCredentialsCertificates extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   certificates: this.props.certificates,
    // };

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.removeCertificate = this.removeCertificate.bind(this);
    this.addCertificate = this.addCertificate.bind(this);
  }

  addCertificate = () => {
    let { certificates } = this.props;

    if (certificates.length < maxCertificates) {
      certificates.push("");

      // this.setState({ certificates: certificates });
      /// pass current state up to parent to propogate changes
      this.props.onChange("certificates", certificates);
    }
  };

  removeCertificate = (index, event) => {
    // function that handles clicks on the icons next to certificate fields
    let { certificates } = this.props;

    event.preventDefault();

    certificates = removeFromArray(certificates, index);
    // this.setState({ certificates: certificates });
    /// pass current state up to parent to propogate changes
    this.props.onChange("certificates", certificates);
  };

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Set state
    let { certificates } = this.props;
    certificates[name] = value;
    // this.setState({ certificates: certificates });

    /// pass current state up to parent to propogate changes
    this.props.onChange("certificates", certificates);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let { certificates } = this.props;

    return (
      <div className="col-md-6">
        <h4 className="mb-3">
          <span className="icon-regular icon-file-certificate"></span>{" "}
          Certificates
          <a
            href="#0"
            className="cl-asset-type-d cl-hover-black font20 mr-1"
            onClick={(e) => this.addCertificate(e)}
          >
            <i className="fas fa-plus-circle"></i>
          </a>
        </h4>

        {certificates.map((certificate, index) => (
          <div className="form-group certificate mb-4" key={index}>
            <>
              <div className="d-flex">
                <a
                  href="#0"
                  className="cl-asset-type-d cl-hover-black font20 mr-1"
                  onClick={(e) => this.removeCertificate(index, e)}
                >
                  <i className="fas fa-minus-circle"></i>
                </a>

                <input
                  type="text"
                  name={index}
                  value={certificate}
                  className="input"
                  onChange={this.handleArrayChange}
                />
              </div>
            </>
          </div>
        ))}
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
    let credentials = this.props;
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
                  </div>
                </div>
                <div className="row row-custom">
                  <EditProfileCredentialsProfessionalMemberships
                    professionaMemberships={professionalMemberships}
                    onChange={this.passChangeUp}
                  />

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
