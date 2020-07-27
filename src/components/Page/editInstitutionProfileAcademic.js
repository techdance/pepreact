import React from "react";

class EditInstitutionAcademicDegreesOffered extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let degreesOffered = this.props.degreesOffered;
    degreesOffered[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("degreesOffered", degreesOffered);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let degreesOffered = this.props.degreesOffered;

    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="box-color border-grey h-100">
            <h4 className="mb-3">Degrees Offered</h4>

            {degreesOffered.map((degreesOffered, index) => (
              <div key={index} className="form-group d-flex align-items-center">
                <a
                  href="javascript::void(0);"
                  className="color-orange font20 mr-1"
                >
                  <i className="fas fa-minus-circle"></i>
                </a>
                <textarea
                  className="input textarea2"
                  name={index}
                  value={degreesOffered}
                  onChange={this.handleArrayChange}
                  rows="2"
                >
                  {degreesOffered}
                </textarea>
              </div>
            ))}

            <div className="form-group d-flex align-items-center">
              <a
                href="javascript::void(0);"
                className="color-orange font20 mr-1"
              >
                <i className="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademicRecognition extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let recognitions = this.props.recognitions;
    recognitions[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("recognitions", recognitions);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let recognitions = this.props.recognitions;

    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="box-color border-grey h-100">
            <h4 className="mb-3">Recognition</h4>

            {recognitions.map((recognition, index) => (
              <div key={index} className="form-group d-flex align-items-center">
                <a
                  href="javascript::void(0);"
                  className="color-orange font20 mr-1"
                >
                  <i className="fas fa-minus-circle"></i>
                </a>
                <textarea
                  className="input textarea2"
                  name={index}
                  value={recognition}
                  onChange={this.handleArrayChange}
                  rows="2"
                >
                  {recognition}
                </textarea>
              </div>
            ))}

            <div className="form-group d-flex align-items-center">
              <a
                href="javascript::void(0);"
                className="color-orange font20 mr-1"
              >
                <i className="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademicAccreditation extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let accreditations = this.props.accreditations;
    accreditations[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("accreditations", accreditations);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let accreditations = this.props.accreditations;

    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="box-color border-grey h-100">
            <h4 className="mb-3">Accreditation</h4>

            {accreditations.map((accreditation, index) => (
              <div key={index} className="form-group d-flex align-items-center">
                <a
                  href="javascript::void(0);"
                  className="color-orange font20 mr-1"
                >
                  <i className="fas fa-minus-circle"></i>
                </a>
                <textarea
                  className="input textarea2"
                  name={index}
                  value={accreditation}
                  onChange={this.handleArrayChange}
                  rows="2"
                >
                  {accreditation}
                </textarea>
              </div>
            ))}

            <div className="form-group d-flex align-items-center">
              <a
                href="javascript::void(0);"
                className="color-orange font20 mr-1"
              >
                <i className="fas fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademicDegreesGranted extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let degreesGranted = this.props.degreesGranted;
    degreesGranted[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("degreesGranted", degreesGranted);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let degreesGranted = this.state;
    degreesGranted[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("degreesGranted", degreesGranted);
  };

  render() {
    const {
      Year,
      Associate,
      Bachelor,
      Master,
      Doctorate,
    } = this.props.degreesGranted;

    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="box-color border-grey h-100">
            <h4 className="mb-3">Degrees Granted During</h4>
            <div className="form-group mb-2">
              <label>Academic Year</label>
              <input
                type="text"
                name="Year"
                value={Year}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
            <div className="form-group mb-2">
              <label>Associate Degrees</label>
              <input
                type="text"
                name="Associate"
                value={Associate}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
            <div className="form-group mb-2">
              <label>Bachelor's Degrees</label>
              <input
                type="text"
                name="Bachelor"
                value={Bachelor}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
            <div className="form-group mb-2">
              <label>Master's Degrees</label>
              <input
                type="text"
                name="Master"
                value={Master}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
            <div className="form-group mb-2">
              <label>Doctorate Degrees</label>
              <input
                type="text"
                name="Doctorate"
                value={Doctorate}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademicDegreePrograms extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let degreePrograms = this.props.degreePrograms;
    degreePrograms[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("degreePrograms", degreePrograms);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let degreePrograms = this.state;
    degreePrograms[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("degreePrograms", degreePrograms);
  };

  render() {
    const { undergraduate, graduate } = this.props.degreePrograms;

    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="box-color border-grey h-100">
            <h4 className="mb-3">Degree Programs</h4>
            <div className="form-group mb-2">
              <label>Undergraduate</label>
              <input
                type="text"
                name="undergraduate"
                value={undergraduate}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
            <div className="form-group mb-2">
              <label>Graduate</label>
              <input
                type="text"
                name="graduate"
                value={graduate}
                onChange={this.handleArrayChange}
                className="input"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademicCollegesandSchools extends React.Component {
  constructor(props) {
    super(props);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleArrayChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  Not setting state since state needs to point to an object and we are working on an array.
    let collegesAndSchools = this.props.collegesAndSchools;
    collegesAndSchools[name] = value;

    /// pass current version up to parent to propogate changes
    this.props.onChange("collegesAndSchools", collegesAndSchools);
  };

  passChangeUp = (field, value) => {
    // This should not be called as we are working with an array of values so there are no children in the data object.
  };

  render() {
    let collegesAndSchools = this.props.collegesAndSchools;

    return (
      <>
        <div className="box-color border-grey h-100">
          <h4 className="mb-3">Colleges &amp; Schools</h4>
          {collegesAndSchools.map((school, index) => (
            <div key={index} className="form-group d-flex align-items-center">
              <a
                href="javascript::void(0);"
                className="color-orange font20 mr-1"
              >
                <i className="fas fa-minus-circle"></i>
              </a>
              <textarea
                className="input textarea2"
                name={index}
                value={school}
                onChange={this.handleArrayChange}
                rows="2"
              >
                {school}
              </textarea>
            </div>
          ))}

          <div className="form-group d-flex align-items-center">
            <a href="javascript::void(0);" className="color-orange font20 mr-1">
              <i className="fas fa-plus-circle"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutionAcademic extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Academic;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let Academic = this.state;
    Academic[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("Academic", Academic);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let Academic = this.state;
    Academic[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("Academic", Academic);
  };

  render() {
    const {
      asof,
      updated,
      collegesAndSchools,
      degreePrograms,
      degreesGranted,
      accreditations,
      recognitions,
      degreesOffered,
    } = this.state;

    return (
      <>
        <div className="row row-custom mb-3">
          <div className="col-lg-12">
            <div className=" box box-border-radius box-shadow bg-white">
              <div className="inner-wrap">
                <div className="box-top d-flex justify-content-between">
                  <h2 className="box-subhead mw-100">
                    <span className="icon-book-user icon-regular"></span>{" "}
                    Academic
                  </h2>
                </div>
                <div className="box-middle color-white">
                  <div className="row row-custom mb-5">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <label>Term</label>
                            <input
                              type="text"
                              name="asof"
                              value={asof}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <label>Year</label>
                            <input
                              type="text"
                              name="updated"
                              value={updated}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-custom">
                    <div className="col-md-4 mb-4">
                      <div className="box-color border-grey h-100">
                        <EditInstitutionAcademicCollegesandSchools
                          collegesAndSchools={collegesAndSchools}
                          onChange={this.passChangeUp}
                        />
                      </div>
                    </div>

                    <EditInstitutionAcademicDegreePrograms
                      degreePrograms={degreePrograms}
                      onChange={this.passChangeUp}
                    />

                    <EditInstitutionAcademicDegreesGranted
                      degreesGranted={degreesGranted}
                      onChange={this.passChangeUp}
                    />

                    <EditInstitutionAcademicAccreditation
                      accreditations={accreditations}
                      onChange={this.passChangeUp}
                    />

                    <EditInstitutionAcademicRecognition
                      recognitions={recognitions}
                      onChange={this.passChangeUp}
                    />

                    <EditInstitutionAcademicDegreesOffered
                      degreesOffered={degreesOffered}
                      onChange={this.passChangeUp}
                    />
                  </div>
                  <div className="row">
                    {/* Not sure why this save button is buried at the bottom of this tile. */}

                    <div className="col-md-12">
                      <button href="#0" className="btn btn-blue" type="submit">
                        Save
                      </button>
                    </div>
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

export default EditInstitutionAcademic;
