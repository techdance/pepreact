import React from "react";

import {
  getProfessor,
  getProfessorMatches,
} from "../../../repositories/ProfessorRepository";

class ShowMatches extends React.Component {
  render() {
    let professor = getProfessor("2"); // dummy id for Gordon
    let professors = getProfessorMatches(professor);

    return (
      <>
        <section className="wrap-collaborated">
          <div className="row row-custom sortable">
            {professors.map((professor) => (
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="box box-collaborated box-border-radius box-shadow bg-white">
                  <div className="inner-wrap row justify-content-center align-items-center asset text-center mr-0 ml-0">
                    <div className="col-md-12 pr-0 pl-0">
                      <a href="#0">
                        <img
                          src={professor.personalInformation.image}
                          width="100"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-12 pr-0 pl-0">
                      <div className="box-top position-relative">
                        <h2>
                          <a
                            href="#0"
                            className="hover-underline color-black color-blue-light-hover"
                          >
                            {/* need title here - does it show on the profile page? */}
                            {professor.personalInformation.firstName +
                              " " +
                              professor.personalInformation.lastName +
                              ", "}{" "}
                            Ph.D.
                          </a>
                        </h2>
                      </div>
                      <div className="box-middle p0">
                        <p>{professor.personalInformation.title} </p>
                        <p>{professor.personalInformation.department} </p>
                        <p>
                          <span className="font-style-italic color-blue-light">
                            {professor.institutionProfile.name}
                          </span>
                        </p>
                        <p>{professor.institutionProfile.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- END COL --> */}
          </div>

          <div className="row">
            <div className="col-md-12 text-center font16 font-weight-bold">
              <a href="#0" className="font-style-italic hover-underline">
                Still not finding what you're looking for?
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ShowMatches;
