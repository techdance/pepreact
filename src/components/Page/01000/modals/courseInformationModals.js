import React from "react";

export class CourseIdentificationModal extends React.Component {
  constructor(props) {
    super(props);
    const { identification } = this.props;
    this.state = identification;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // get user input change from the synthetic event;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const identification = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCourseIdentification"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Course Identification</strong>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                {/* Event delegation for handleChange to all input fields below */}
                <div className="row" onChange={this.handleChange}>
                  <div className="col-md-12">
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Course Title</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.courseTitle}
                          name="courseTitle"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Course Number</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.courseNumber}
                          name="courseNumber"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Prerequisites</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.prerequisites}
                          name="prerequisites"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Course Description</label>
                      <div className="col-md-8">
                        <textarea
                          className="w-100"
                          name="description"
                          value={identification.description}
                        >
                          {identification.description}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-right">
                    <a
                      href="#0"
                      className="btn btn-grey mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                    {/* is this going to be a db roundtrip? */}
                    <a href="#0" className="btn btn-blue" data-dismiss="modal">
                      Save
                    </a>
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

export class CourseHoursModal extends React.Component {
  constructor(props) {
    super(props);
    const { hours } = this.props;
    this.state = hours;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // get user input change from the synthetic event;
    const { name, value } = event.target;

    let hours = this.state;
    hours[name] = value;
    this.setState(hours);
  }

  render() {
    const hours = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="courseHoursModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Course Hours</strong>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Number of Credits</label>
                      <input
                        type="number"
                        value={hours.creditHours}
                        name="creditHours"
                        onChange={this.handleChange}
                        className="w-60px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Number of Course Weeks</label>
                      <input
                        type="number"
                        value={hours.courseWeeks}
                        onChange={this.handleChange}
                        name="courseWeeks"
                        className="w-60px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Contact Hours per Week</label>
                      <input
                        type="number"
                        value={hours.contactHours}
                        name="contactHours"
                        onChange={this.handleChange}
                        className="w-60px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Lecture Hours per Week</label>
                      <input
                        type="number"
                        value={hours.lectureHours}
                        name="lectureHours"
                        onChange={this.handleChange}
                        className="w-60px"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Lab Hours per Week</label>
                      <input
                        type="number"
                        value={hours.labHours}
                        name="labHours"
                        onChange={this.handleChange}
                        className="w-60px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Independent Study Hours per Week</label>
                      <input
                        type="number"
                        value={hours.independentHours}
                        name="independentHours"
                        onChange={this.handleChange}
                        className="w-60px"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Contact Hours:</label>
                      <div>42 Hours</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Independent Study Hours:</label>
                      <div>84 Hours</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <label>Total Hours:</label>
                      <div>126 Hours</div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12">
                    <strong>Tip: </strong>The average 14 week course should have
                    1 hour of class time and 2 hours of independent study per
                    week for every credit hour.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-right">
                    <a
                      href="#0"
                      className="btn btn-grey mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <a href="#0" className="btn btn-blue" data-dismiss="modal">
                      Save
                    </a>
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

export class CourseResourcesModal extends React.Component {
  constructor(props) {
    super(props);
    const { resources } = this.props;
    this.state = resources;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // get user input change from the synthetic event;
    const { name, value } = event.target;

    let resources = this.state;
    resources[name] = value;
    this.setState(resources);
  }

  render() {
    const resources = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCourseResources"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Course Resources</strong>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Textbook Title</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={resources.textbookTitle}
                          name="textbookTitle"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Publisher's Name</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={resources.publisher}
                          name="publisher"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Author</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={resources.author}
                          name="author"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">ISBN</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={resources.isbn}
                          name="isbn"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-right">
                    <a
                      href="#0"
                      className="btn btn-grey mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <a href="#0" className="btn btn-blue" data-dismiss="modal">
                      Save
                    </a>
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
