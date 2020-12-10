import React from "react";

import {
  favorites,
  connections,
  contacts,
} from "../../../data/communicateNow.js";

class RenderCommunicateNow extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <>
        <td>
          <img
            src={contact.image}
            width="38"
            alt={contact.name + " of " + contact.institution}
          />
        </td>
        <td className="text-left">
          <span className="color-blue font-weight-bold">{contact.name} </span>
          <br />
          {contact.institution}
        </td>
        <td>
          <div className="d-flex">
            <a href="#0">
              <i
                className="fad fa-envelope fa-2x"
                style={{ color: "#008ffa" }}
              ></i>
            </a>
            <a href="#0" className="mx-1">
              <i
                className="fad fa-comments-alt fa-2x"
                style={{ color: "#008ffa" }}
              ></i>
            </a>
            <a href="#0">
              <i
                className="fad fa-phone-volume fa-2x"
                style={{ color: "#008ffa" }}
              ></i>
            </a>
          </div>
        </td>
      </>
    );
  }
}

class ShowProfessorHomepageCommunicateNow extends React.Component {
  render() {
    return (
      <div className="col-lg-3 mb-4">
        <div className="communicate box box-border-radius box-shadow bg-white">
          <div className="inner-wrap mb-4">
            <div className="box-top position-relative">
              <h2 className="box-subhead icon-fa-box icon-broadcast-tower-light pl-45">
                Communicate Now
              </h2>
              <a href="#0" className="icon-setting icon-box">
                <i className="fas fa-cog"></i>
              </a>
            </div>
          </div>
          <div className="box-middle text-center wrap-images d-flex justify-content-between m-0">
            <div className="wrap-tile-tabs w-100">
              <ul
                className="nav nav-pills mb-3 d-flex"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="favorites-tab"
                    data-toggle="pill"
                    href="#favorites"
                    role="tab"
                    aria-controls="favorites"
                    aria-selected="true"
                  >
                    Favorites
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="connections-tab"
                    data-toggle="pill"
                    href="#connections"
                    role="tab"
                    aria-controls="connections"
                    aria-selected="false"
                  >
                    Connections
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="contacts-tab"
                    data-toggle="pill"
                    href="#contacts"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active tab-scroll"
                  id="favorites"
                  role="tabpanel"
                  aria-labelledby="favorites-tab"
                >
                  <table className="table">
                    <tbody>
                      {favorites.map((favorite, index) => (
                        <tr key={index}>
                          <RenderCommunicateNow contact={favorite} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade tab-scroll"
                  id="connections"
                  role="tabpanel"
                  aria-labelledby="connections-tab"
                >
                  <table className="table">
                    <tbody>
                      {connections.map((connection, index) => (
                        <tr key={index}>
                          <RenderCommunicateNow contact={connection} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade tab-scroll"
                  id="contacts"
                  role="tabpanel"
                  aria-labelledby="contacts-tab"
                >
                  <table className="table">
                    <tbody>
                      {contacts.map((contact, index) => (
                        <tr key={index}>
                          <RenderCommunicateNow contact={contact} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfessorHomepageCommunicateNow;
