import React from "react";

class EditInstitutuionFacultyInfoHighestDegree extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.highestDegreeField;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let highestDegreeField = this.state;
    highestDegreeField[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("highestDegreeField", highestDegreeField);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let highestDegreeField = this.state;
    highestDegreeField[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("highestDegreeField", highestDegreeField);
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <div className="col-md-6">
          <div className="form-group mb-2">
            <label>Faculty with Highest Degree in Field</label>
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              className="input"
            />
          </div>
        </div>
      </>
    );
  }
}

class EditInstitutuionFacultyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.FacultyInfo;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let FacultyInfo = this.state;
    FacultyInfo[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("FacultyInfo", FacultyInfo);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let FacultyInfo = this.state;
    FacultyInfo[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("FacultyInfo", FacultyInfo);
  };

  render() {
    const {
      asof,
      updated,
      fullTime,
      studentFacultyRatio,
      highestDegreeField,
      averageUndergraduateClassSize,
    } = this.state;

    return (
      <div className="row row-custom mb-3">
        <div className="col-lg-12">
          <div className=" box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top d-flex justify-content-between">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-user-tie"></span> Faculty
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
                          <label>Full-Time Faculty</label>
                          <input
                            type="text"
                            name="fullTime"
                            value={fullTime}
                            onChange={this.handleChange}
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label>Student-Faculty Ratio</label>
                          <input
                            type="text"
                            name="studentFacultyRatio"
                            value={studentFacultyRatio}
                            onChange={this.handleChange}
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <EditInstitutuionFacultyInfoHighestDegree
                        highestDegreeField={highestDegreeField}
                        onChange={this.passChangeUp}
                      />

                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label>Average Undergraduate Class Size</label>
                          <input
                            type="text"
                            name="averageUndergraduateClassSize"
                            value={averageUndergraduateClassSize}
                            onChange={this.handleChange}
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
    );
  }
}

export default EditInstitutuionFacultyInfo;
