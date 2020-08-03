import React from "react";

class ProfessorMessagesReceivedContainer extends React.Component {
  render() {
    const {
      receivedProjectMessages,
      sentProjectMessages,
    } = this.props.professor;

    return (
      <>
        <section className="wrap-lab">
          <div className="row row-custom">
            <div className="col-lg-12 mb-4">
              <div className="box box-border-radius box-shadow bg-white block-invite">
                <div className="inner-wrap">
                  <div className="box-top position-relative mb-3">
                    <h3 className="box-subhead">
                      <i className="fas fa-comments"></i> Messages
                    </h3>
                  </div>
                  <div className="box-middle">
                    <ul className="nav nav-tabs" id="tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active show nav-blue"
                          id="received-tab"
                          data-toggle="tab"
                          href="#discussion"
                          role="tab"
                          aria-controls="discussion"
                          aria-selected="true"
                        >
                          Received
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link nav-grey"
                          id="sent-tab"
                          data-toggle="tab"
                          href="#file"
                          role="tab"
                          aria-controls="file"
                          aria-selected="false"
                        >
                          Sent
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="discussion"
                        role="tabpanel"
                        aria-labelledby="received-tab"
                      >
                        <div className="block-invite-content pt-2">
                          <table className="table table-invite">
                            {receivedProjectMessages.map((message, index) => (
                              <tr id={"Project_Invites_" + index + 1}>
                                <td className="border-bottom-none">
                                  <div className="person-img">
                                    <img src={message.from.image} width="95" />
                                  </div>
                                </td>
                                <td>
                                  <p className="invites-head">
                                    {message.from.name}
                                  </p>

                                  <p className="invites-content">
                                    {message.from.title}
                                  </p>
                                  <p className="font-style-italic">
                                    <a href="#0">{message.from.institution}</a>
                                  </p>

                                  <p className="invites-date">
                                    {message.timeStamp}
                                  </p>
                                </td>

                                <td>
                                  <p className="mb-2">
                                    <strong>Project</strong>
                                    <br />
                                    {message.project.type}
                                  </p>
                                  <p>
                                    <strong>Discipline</strong>
                                    <br />​{message.project.discipline}
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-2">
                                    <strong>Delivery Method</strong>
                                    <br />
                                    {message.project.deliveryMethod}
                                  </p>
                                  <p>
                                    <strong>Region</strong>
                                    <br />
                                    {message.project.region}
                                  </p>
                                </td>
                                <td>
                                  <div className="d-flex mb-4">
                                    <a
                                      href="#0"
                                      className="btn btn-blue btn-sm mr-2 color-white"
                                      onclick="decline_row(1)"
                                    >
                                      DECLINE
                                    </a>
                                    <a
                                      href="#0"
                                      className="btn btn-blue btn-sm color-white"
                                      onclick="remove_row(1)"
                                    >
                                      ACCEPT
                                    </a>
                                  </div>
                                  <div className="text-center">
                                    <a
                                      href="#0"
                                      data-toggle="modal"
                                      data-target="#projectInviteBradleyModal"
                                    >
                                      View More{" "}
                                      <i className="icon-regular fa-arrow-alt-circle-right"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="file"
                        role="tabpanel"
                        aria-labelledby="sent-tab"
                      >
                        <div className="block-invite-content pt-2">
                          <table className="table table-invite">
                            {sentProjectMessages.map((message, index) => (
                              <tr id={"Project_Invites_" + index + 1}>
                                <td className="border-bottom-none">
                                  <div className="person-img">
                                    <img src={message.from.image} width="95" />
                                  </div>
                                </td>
                                <td>
                                  <p className="invites-head">
                                    {message.from.name}
                                  </p>

                                  <p className="invites-content">
                                    {message.from.title}
                                  </p>
                                  <p className="font-style-italic">
                                    <a href="#0">{message.from.institution}</a>
                                  </p>

                                  <p className="invites-date">
                                    {message.timeStamp}
                                  </p>
                                </td>

                                <td>
                                  <p className="mb-2">
                                    <strong>Project</strong>
                                    <br />
                                    {message.project.type}
                                  </p>
                                  <p>
                                    <strong>Preferred Language</strong>
                                    <br />​{message.project.preferredLanguage}
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-2">
                                    <strong>Discipline</strong>
                                    <br />
                                    {message.project.discipline}
                                  </p>
                                  <p>
                                    <strong>Region</strong>
                                    <br />
                                    {message.project.region}
                                  </p>
                                </td>
                                <td>
                                  <span className="color-disabled">
                                    {message.project.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProfessorMessagesReceivedContainer;
