import React from "react";

export default class ProjectLabCertificateShowSummary extends React.Component {
  render() {
    const { certificateProject } = this.props;
    const { certificateInformation, certificateDesign } = certificateProject;
    const { identification, details, qualifications } = certificateInformation;
    const {
      topics,
      objectives,
      learningEnvironments,
      standards,
    } = certificateDesign;

    return (
      <>
        <div className="row row-custom">
          <div className="col-md-12">
            <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
              <table className="table table4">
                <thead>
                  <tr>
                    <th className="title-head-th" scope="col">
                      Certificate Information
                    </th>
                    <th scope="col" className="text-right">
                      <a href="#0" data-target="#" data-toggle="modal">
                        <i className="fas fa-edit"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Certificate Name:
                    </th>
                    <td>{identification.certificateTitle}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Certificate Number:
                    </th>
                    <td>{identification.certificateNumber}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Prerequisites:
                    </th>
                    <td>{identification.prerequisites}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Units:
                    </th>
                    <td>{details.units}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Certificate Level:
                    </th>
                    <td>{details.certificateLevel}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Time Commitment:
                    </th>
                    <td>
                      {details.timeCommitment +
                        " " +
                        details.timeCommitmentUnit}
                    </td>
                  </tr>
                  {qualifications.map((qualification, index) => (
                    <tr key={index}>
                      <th className="title-row-th" scope="row">
                        {"Instructor " + (index + 1) + " Qualifications:"}
                      </th>
                      <td>{qualification}</td>
                    </tr>
                  ))}

                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Description:
                    </th>
                    <td>{identification.description}</td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Topics:
                    </th>
                    <td>
                      {topics.map((topic, index) => (
                        <div key={index}>{topic}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Course Objectives:
                    </th>
                    <td>
                      {objectives.map((objective, index) => (
                        <div key={index}>{objective}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Learning Environments:
                    </th>
                    <td>
                      {learningEnvironments.map(
                        (learningEnvironment, index) => (
                          <div key={index}>{learningEnvironment}</div>
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className="title-row-th" scope="row">
                      Certificate Standards:
                    </th>
                    <td>
                      {standards.map((standard, index) => (
                        <div key={index}>{standard}</div>
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
}
