import React from "react";

export default class ShowCourseSummary extends React.Component {
  constructor(props) {
    super(props);

    let { courseProject } = this.props;

    this.state = { courseProject: courseProject };

    this.showExportButtons = this.showExportButtons.bind(this);
    this.showCourseSummary = this.showCourseSummary.bind(this);
  }

  showExportButtons() {
    return (
      <>
        <div className="row row-custom mb-4 flex-md-row flex-column justify-content-between align-items-center">
          <div className="col-md-9">
            <a href="#0" className="btn btn-grey btn-w-100 mr-3 mb-2">
              Export Syllabus
            </a>
            <a href="#0" className="btn btn-grey btn-w-100 mr-3 mb-2">
              Export Course Control Document
            </a>
            <a href="#0" className="btn btn-grey btn-w-100 mr-3 mb-2">
              Export To BlendED
            </a>
          </div>
          <div className="col-md-3 text-md-right text-left"></div>
        </div>
      </>
    );
  }

  showCourseSummary() {
    const { courseProject } = this.state;
    const {
      topics,
      objectives,
      learningEnvironments,
    } = courseProject.courseDesign;

    return (
      <>
        <div className="row row-custom">
          <div className="col-md-12">
            <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
              <table className="table table4">
                <thead>
                  <tr>
                    <th className="title-head-th" scope="col">
                      Course Information
                    </th>
                    <th scope="col" className="text-right">
                      <a href="#0" data-target="#0" data-toggle="modal">
                        <i className="fas fa-edit"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Title:
                    </th>
                    <td>
                      {
                        courseProject.courseInformation.identification
                          .courseTitle
                      }
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Number:
                    </th>
                    <td>
                      {
                        courseProject.courseInformation.identification
                          .courseNumber
                      }
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Prerequisites:
                    </th>
                    <td>
                      {
                        courseProject.courseInformation.identification
                          .prerequisites
                      }
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Credit Hours:
                    </th>
                    <td>{courseProject.courseInformation.hours.creditHours}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Contact Hours:
                    </th>
                    <td>
                      {courseProject.courseInformation.hours.contactHours}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Lecture Hours:
                    </th>
                    <td>
                      {courseProject.courseInformation.hours.lectureHours}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Laboratory Hours:
                    </th>
                    <td>{courseProject.courseInformation.hours.labHours}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Textbook Title:
                    </th>
                    <td>
                      {courseProject.courseInformation.resources.textbookTitle}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Publisher's Name:
                    </th>
                    <td>
                      {courseProject.courseInformation.resources.publisher}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Author:
                    </th>
                    <td>{courseProject.courseInformation.resources.author}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      ISBN:
                    </th>
                    <td>{courseProject.courseInformation.resources.isbn}</td>
                  </tr>
                  {courseProject.courseInformation.qualifications.map(
                    (qualification, index) => (
                      <tr key={index}>
                        <th className="title-row-th" scope="row">
                          {"Instructor " + (index + 1) + " Qualifications:"}
                        </th>
                        <td>{qualification}</td>
                      </tr>
                    )
                  )}

                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Description:
                    </th>
                    <td>
                      {
                        courseProject.courseInformation.identification
                          .description
                      }
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Topics:
                    </th>
                    <td>
                      {topics.map((topic) => (
                        <>
                          {topic}
                          <br />{" "}
                        </>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Objectives:
                    </th>
                    <td>
                      {objectives.map((objective) => (
                        <>
                          {objective}
                          <br />{" "}
                        </>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Learning Environments:
                    </th>
                    <td>
                      {learningEnvironments.map((learningEnvironment) => (
                        <>
                          {learningEnvironment}
                          <br />{" "}
                        </>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        {this.showExportButtons()}
        {this.showCourseSummary()}
      </>
    );
  }
}
