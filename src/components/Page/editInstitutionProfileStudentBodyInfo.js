import React from "react";

class EditInstitutionStudentBodyInfoFemale extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.female;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let female = this.state;
    female[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("female", female);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let female = this.state;
    female[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("female", female);
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <div className="form-group mb-2">
          <label>Female Students</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="input"
          />
        </div>
      </>
    );
  }
}

class EditInstitutionStudentBodyInfoMale extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.male;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let male = this.state;
    male[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("male", male);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let male = this.state;
    male[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("male", male);
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <div className="form-group mb-2">
          <label>Male Students</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="input"
          />
        </div>
      </>
    );
  }
}

class EditInstitutionStudentBodyInfoOther extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.other;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let other = this.state;
    other[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("other", other);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let other = this.state;
    other[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("other", other);
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <div className="form-group mb-2">
          <label>Other Students</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="input"
          />
        </div>
      </>
    );
  }
}

class EditInstitutionStudentBodyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.StudentBodyInfo;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let StudentBodyInfo = this.state;
    StudentBodyInfo[name] = value;
    this.setState({ StudentBodyInfo });

    /// pass current state up to parent to propogate changes
    this.props.onChange("StudentBodyInfo", StudentBodyInfo);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let StudentBodyInfo = this.state;
    StudentBodyInfo[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("StudentBodyInfo", StudentBodyInfo);
  };

  render() {
    const {
      asof,
      updated,
      total,
      undergraduate,
      graduate,
      female,
      male,
      other,
    } = this.state;

    return (
      <>
        <div className="row row-custom mb-3">
          <div className="col-lg-12">
            <div className=" box box-border-radius box-shadow bg-white">
              <div className="inner-wrap">
                <div className="box-top d-flex justify-content-between">
                  <h2 className="box-subhead mw-100">
                    <i className="far fa-user-graduate"></i> Student Body
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

                  <div className="row row-custom mb-5">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <label>Total</label>
                            <input
                              type="text"
                              name="total"
                              value={total}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label>Undergraduate Students</label>
                            <input
                              type="text"
                              name="undergraduate"
                              value={undergraduate}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label>Graduate Students</label>
                            <input
                              type="text"
                              name="graduate"
                              value={graduate}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <EditInstitutionStudentBodyInfoFemale
                            female={female}
                            onChange={this.passChangeUp}
                          />
                          <EditInstitutionStudentBodyInfoMale
                            male={male}
                            onChange={this.passChangeUp}
                          />
                          <EditInstitutionStudentBodyInfoOther
                            other={other}
                            onChange={this.passChangeUp}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <label>Full-Time</label>
                            <input
                              type="text"
                              name=""
                              value="6,793"
                              className="input"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label>Part-Time</label>
                            <input
                              type="text"
                              name=""
                              value="4,912"
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <label>In-State</label>
                            <input
                              type="text"
                              name=""
                              value="1,881"
                              className="input"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label>Out of State</label>
                            <input
                              type="text"
                              name=""
                              value="3,610"
                              className="input"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label>International</label>
                            <input
                              type="text"
                              name=""
                              value="3,173"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
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

export default EditInstitutionStudentBodyInfo;
