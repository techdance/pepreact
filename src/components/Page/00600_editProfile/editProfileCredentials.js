import React from "react";

// globals
const maxprofessionaMemberships = 3;
const maxcertificate = 3;

class EditProfileCredentialsprofessionaMemberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionaMemberships: this.props.professionaMemberships,
      tempprofessionaMemberships: [],
      educationallevel: this.props.educationallevel,
    };

    let { professionaMemberships } = this.state;

    // structure to maintain status of certificate entry fields
    // iconValue repesent whether the oranga icon is a plus or minus
    //  certificate contains the last value from the professionaMemberships array passed as props to the class
    //  so that the informaion is retained if user clicks "minus" on a valid certificate and wants it back.
    var i;
    for (i = 0; i < maxprofessionaMemberships; i++) {
      if (i < professionaMemberships.length) {
        this.state.tempprofessionaMemberships.push({
          iconValue: "minus",
          professionaMembership: professionaMemberships[i],
        });
      } else {
        this.state.tempprofessionaMemberships.push({
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

    let { professionaMemberships, tempprofessionaMemberships } = this.state;

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (tempprofessionaMemberships[index].iconValue === "minus") {
      tempprofessionaMemberships[index].professionaMembership =
        professionaMemberships[index];
      tempprofessionaMemberships[index].iconValue = "plus";
      professionaMemberships[index] = "";
    } else {
     
      professionaMemberships[index] = tempprofessionaMemberships[index].professionaMembership;
      tempprofessionaMemberships[index].iconValue = "minus";
    }
    this.setState({ professionaMemberships: professionaMemberships });
    this.setState({ tempprofessionaMemberships: tempprofessionaMemberships });
    /// pass current state up to parent to propogate changes
    this.props.onChange("professionaMemberships", professionaMemberships);
  };

  handleArrayChange = (event, index) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Set state
    let { professionaMemberships } = this.state;

    // professionaMemberships[name].link = "#0";
    professionaMemberships[index] = value;
    this.setState({ professionaMemberships: professionaMemberships });

    /// pass current state up to parent to propogate changes
    this.props.onChange("professionaMemberships", professionaMemberships);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };


  componentWillReceiveProps(nextProps){
    if (this.state?.educationallevel !== nextProps?.educationallevel) {
      
        this.setState({ ...nextProps,  tempprofessionaMemberships: [] });
        let { professionaMemberships } =  nextProps;
        if(professionaMemberships){
        var i;
        for (i = 0; i < maxprofessionaMemberships; i++) {
          if (i < professionaMemberships.length) {
            let newObj = {
              iconValue: "minus",
              professionaMembership: professionaMemberships[i],
            }
            this.setState( prevs => ({  ...prevs, tempprofessionaMemberships:  [...prevs.tempprofessionaMemberships, newObj ]  }))
          } else {
           let newObj = {
              iconValue: "plus",
              professionaMembership: "",
            };
            this.setState( prevs => ({  ...prevs, tempprofessionaMemberships:  [...prevs.tempprofessionaMemberships, newObj ]  }))
          }
        }
      }
    }
  }




  render() {
    let { professionaMemberships, tempprofessionaMemberships } = this.state;

    return (
      <>
        <h4 className="mb-3">
          <span className="icon-regular icon-trophy-alt"></span> Professional
          Memberships
        </h4>

        {tempprofessionaMemberships.length && professionaMemberships.map((membership, index) =>{ 
          return (
          <div className="form-group" key={index}>
            <label>Membership &ndash; {index + 1}</label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-membership"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.handleClick(index, e)}
              >
                {tempprofessionaMemberships[index].iconValue === "plus" ? (
                  <i className="fas fa-plus-circle"></i>
                ) : (
                  <i className="fas fa-minus-circle"></i>
                )}
              </a>
              {tempprofessionaMemberships[index].iconValue === "plus" ? (
                ""
              ) : (
                <input
                  type="text"
                  name={"membership"+index}
                  value={membership}
                  className="input"
                  onChange={(e)=>this.handleArrayChange(e, index)}
                />
              )}
            </div>
          </div>
        ) } )  }
        {/* if less than maxprofessionaMemberships then show plus icon to add one */}
        {professionaMemberships.length < maxprofessionaMemberships ? (
          <div className="form-group">
            <label>
              Membership &ndash; {professionaMemberships.length + 1}
            </label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-membership"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) =>
                  this.handleClick(professionaMemberships.length, e)
                }
              >
                <i className="fas fa-plus-circle"></i>
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

class EditProfileCredentialscertificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      certificate: this.props.certificate,
      tempcertificate: [],
      educationallevel: this.props.educationallevel
    };

    let { certificate } = this.state;

    // structure to maintain status of certificate entry fields
    // iconValue repesent whether the oranga icon is a plus or minus
    //  certificate contains the last value from the certificate array passed as props to the class
    //  so that the informaion is retained if user clicks "minus" on a valid certificate and wants it back.
    var i;
    for (i = 0; i < maxcertificate; i++) {
      if (i < certificate.length) {
        this.state.tempcertificate.push({
          iconValue: "minus",
          certificate: certificate[i],
        });
      } else {
        this.state.tempcertificate.push({
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

    let { certificate, tempcertificate } = this.state;

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (tempcertificate[index].iconValue === "minus") {
      tempcertificate[index].certificate = certificate[index];
      tempcertificate[index].iconValue = "plus";
      certificate[index] = "";
    } else {
      certificate[index] = tempcertificate[index].certificate;
      tempcertificate[index].iconValue = "minus";
    }

    this.setState({ certificate: certificate });
    this.setState({ tempcertificate: tempcertificate });
  };

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Set state
    let { certificate } = this.state;
    certificate[name] = value;
    this.setState({ certificate: certificate });

    /// pass current state up to parent to propogate changes
    this.props.onChange("certificate", certificate);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };


  componentWillReceiveProps(nextProps){
    if (this.state?.educationallevel !== nextProps?.educationallevel) {
      
        this.setState({ ...nextProps,  tempcertificate: [] });
        let { certificate } =  nextProps;
      var i;
      for (i = 0; i < maxcertificate; i++) {
        if (i < certificate.length) {
          let newObj = {
            iconValue: "minus",
            certificate: certificate[i],
          };
          this.setState( prevs => ({  ...prevs, tempcertificate:  [...prevs.tempcertificate, newObj ]  }))
        } else {
          let newObj = {
            iconValue: "plus",
            certificate: "",
          };
          this.setState( prevs => ({  ...prevs, tempcertificate:  [...prevs.tempcertificate, newObj ]  }))
        }
      }
    }
  }




  render() {
    let { certificate, tempcertificate } = this.state;
    return (
      <div className="col-md-6">
        <h4 className="mb-3">
          <span className="icon-regular icon-file-certificate"></span>{" "}
          certificate
        </h4>

        {tempcertificate.length && certificate.map((certificateName, index) => (
          <div className="form-group" key={index}>
            <label>Certificate - {index + 1}</label>
            <>
              <div className="d-flex">
                <a
                  href="#0"
                  // id="add-certificate"
                  className="cl-asset-type-d cl-hover-black font20 mr-1"
                  onClick={(e) => this.handleClick(index, e)}
                >
                  {tempcertificate[index].iconValue === "plus" ? (
                    <i className="fas fa-plus-circle"></i>
                  ) : (
                    <i className="fas fa-minus-circle"></i>
                  )}
                </a>
                {tempcertificate[index].iconValue === "plus" ? (
                  ""
                ) : (
                  <input
                    type="text"
                    name={"certificate"+index}
                    value={certificateName}
                    className="input"
                    onChange={this.handleArrayChange}
                  />
                )}
              </div>
            </>
          </div>
        ))}

        {/* if less than maxcertificate then show plus icon to add one */}
        {certificate.length < maxcertificate ? (
          <div className="form-group">
            <label>Certificate - {certificate.length + 1}</label>
            <div className="d-flex">
              <a
                href="#0"
                // id="add-certificate"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.handleClick(certificate.length, e)}
              >
                <i className="fas fa-plus-circle"></i>
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

  componentWillReceiveProps(nextProps){
    if (this.state?.userId !== nextProps?.credentials?.userId) {
        this.setState({ ...nextProps?.credentials })
    }
  }


  render() {
    const {
      membership={},
      educationallevel,
      certificate={},
      status,
    } = this.state || {
      membership:{},
      educationallevel:"",
      certificate:{},
      status: true
    };

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
                          name="educationallevel"
                          value={educationallevel}
                          className="input"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div class="col-md-6"></div>
                  <div className="col-md-6"> 
                  <EditProfileCredentialsprofessionaMemberships
                      professionaMemberships={Object.values(membership)}
                      educationallevel={educationallevel}
                      onChange={this.passChangeUp}
                    />
                  </div>
                  <div className="col-md-6">
                  <EditProfileCredentialscertificate
                    certificate={Object.values(certificate)}
                    educationallevel={educationallevel}
                    onChange={this.passChangeUp}
                  />
                  </div>
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
