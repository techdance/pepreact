import React from "react";

class ShowProfessorHomepagePartners extends React.Component {
  render() {
    let { matches } = this.props;

    const arrayLength = matches.length;

    if (arrayLength > 3) {
      matches.splice(3, arrayLength - 3);
    }

    return (
      <>
        <div className="col-lg-3 mb-4 my-projects">
          <div className="recommended box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-user-friends pl-45">
                  Recommended Partners
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <i className="fas fa-cog"></i>
                </a>
              </div>

              {matches.map((match, index) => (
                <div className="box-middle" key={index}>
                  <div className="item">
                    <div className="item-img partner-img position-relative">
                      <a href="#0">
                        <img
                          src={match.personalInformation.image}
                          width="59"
                          alt=""
                        />
                      </a>
                      <div className="toltip3 any-toltip toltip-bg-black">
                        <div className="d-flex">
                          <a href="#0">
                            <img
                              src="images/contact-partner-1.png"
                              width="50"
                              alt=""
                            />
                          </a>
                          <a href="#0">
                            <img
                              src="images/contact-partner-2.png"
                              width="50"
                              alt=""
                            />
                          </a>
                          <a href="#0">
                            <img
                              src="images/contact-partner-3.png"
                              width="50"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item-text">
                      <a
                        href="#0"
                        className="partner partner-name color-blue-light hover-underline"
                      >
                        {match.personalInformation.firstName +
                          " " +
                          match.personalInformation.lastName}
                        , {match.personalInformation.prefix}.
                      </a>
                      <span className="partner partner-title color-blue-light">
                        {match.title}
                      </span>
                      <span className="partner partner-title color-blue-light">
                        {match.department}
                      </span>
                      <span className="partner partner-university">
                        {match.institutionProfile.name}
                      </span>
                      <span className="partner partner-address">
                        {match.institutionProfile.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="box-bottom text-center font-weight-bold position-relative pt-4 pb-4">
                <a
                  href="#0"
                  className="btn btn-blue btn-w-100"
                  id="partner-search"
                >
                  View Matches
                </a>
                <div className="toltip4 text-left any-toltip">
                  <div className="search-box-header position-relative">
                    <a href="#0" className="btn-close color-white">
                      <i className="fa fa-times-circle"></i>
                    </a>
                    <p>What Are You Looking For?</p>
                  </div>
                  <div className="search-box-body">
                    <table
                      className="table-search"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <thead>
                        <tr>
                          <td className="label-td" width="150">
                            Program
                          </td>
                          <td className="input-td">
                            <select name="" id="">
                              <option value="Anthropology">Anthropology</option>
                              <option value="Biochemistry">Biochemistry</option>
                              <option value="Biology">Biology</option>
                              <option value="Chemistry">Chemistry</option>
                              <option value="Economics">Economics</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="label-td">Location</td>
                          <td className="input-td">
                            <input
                              type="text"
                              placeholder="Enter Region Or Country"
                            />
                          </td>
                        </tr>
                      </thead>
                    </table>

                    <table>
                      <thead>
                        <tr>
                          <td className="label-td2">Program Start Date</td>
                          <td className="input-td">
                            <input
                              type="text"
                              className="datepicker"
                              placeholder=" dd / mm / yy "
                              readOnly
                            />
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="search-box-footer position-relative text-center">
                    <a href="#0" className="btn btn-blue">
                      Search
                    </a>
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

export default ShowProfessorHomepagePartners;
