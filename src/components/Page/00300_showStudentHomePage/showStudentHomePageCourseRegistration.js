import React from "react";

class ShowStudentHomePageCourseRegistration extends React.Component {
  render() {
    return (
      <>
        <div className="box box-border-radius box-shadow bg-white height-auto mt-4">
          <div className="inner-wrap">
            <div className="box-top position-relative">
              <h2 className="box-subhead">
                <span className="icon-regular icon-book-medical"></span>Course
                Registration
              </h2>
              <a href="#0" className="icon-setting icon-box">
                <span className="icon-solid fa-cog"></span>
              </a>
            </div>
          </div>
          <div className="box-middle mb-0 list-bullet">
            <ul>
              <li>
                <a href="#0">Register for Next Term</a>
              </li>
              <li>
                <a href="#0">Add or Drop Course</a>
              </li>
              <li>
                <a href="#0">Withdraw from Course</a>
              </li>
              <li>
                <a href="#0">Waitlist Status</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageCourseRegistration;
