import React from "react";

class ShowProfessorHomepageAdvisees extends React.Component {
  render() {
    const { advisees } = this.props;

    return (
      <>
        <div className="col-lg-3 mb-4 my-projects">
          <div className="recommended box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-book-reader pl-4">
                  My Advisees
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <i className="fas fa-cog"></i>
                </a>
              </div>
              {advisees.map((advisee, index) => (
                <div className="box-middle" key={index}>
                  <div className="item d-flex align-items-center">
                    <div className="item-img partner-img position-relative">
                      <a href="#0">
                        <img
                          src={advisee.image}
                          alt={advisee.name}
                          width="59"
                        />
                      </a>
                      <div className="toltip3 any-toltip">
                        <div className="d-flex">
                          <a href="#0">
                            <img
                              src="images/contact-partner-1.png"
                              alt=""
                              width="50"
                            />
                          </a>
                          <a href="#0">
                            <img
                              src="images/contact-partner-2.png"
                              alt=""
                              width="50"
                            />
                          </a>
                          <a href="#0">
                            <img
                              src="images/contact-partner-3.png"
                              alt=""
                              width="50"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item-text">
                      <a href="#0">
                        <span className="partner partner-name color-black">
                          {advisee.name}
                        </span>
                      </a>
                      <span className="partner partner-title color-black">
                        {advisee.year + ", " + advisee.major}​
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="box-bottom text-center font-weight-bold position-relative pt-4">
                <a
                  href="#0"
                  className="btn btn-blue btn-w-100"
                  id="partner-search"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProfessorHomepageAdvisees;
