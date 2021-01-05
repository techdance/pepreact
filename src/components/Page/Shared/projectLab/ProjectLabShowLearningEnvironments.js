import React from "react";

export default class ProjectLabShowLearningEnvironments extends React.Component {
  render() {
    const { learningEnvironments } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              <thead>
                <tr>
                  <th className="title-head-th-1" scope="col">
                    Learning Environments
                  </th>
                  <th scope="col" className="text-right">
                    <a
                      href="#0"
                      data-target="#modalLearningEnvironment"
                      data-toggle="modal"
                    >
                      <i className="fas fa-edit"></i>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {learningEnvironments.map((learningEnvironment, index) => (
                  <tr key={index}>
                    <th className="title-row-th-1" scope="row"></th>
                    <td>{learningEnvironment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
