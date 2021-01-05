import React from "react";

export default class ProjectLabCertificateShowTopics extends React.Component {
  render() {
    const { topics } = this.props;

    return (
      <div className="col-md-12 mb-4">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <table className="table table4">
            <thead>
              <tr>
                <th className="title-head-th">Certificate Topics</th>
                <th className="text-right middle">
                  <a
                    href="#0"
                    data-target="#modalCertificateTopics"
                    data-toggle="modal"
                  >
                    <i className="fas fa-edit"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, index) => (
                <tr key={index}>
                  <td className="middle" colSpan="2">
                    <strong>{index + 1 + ":"} </strong>
                    {topic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
