import React from "react";

class ShowInstitutionFacultyInfo extends React.Component {
  render() {
    return (
      <>
        <div className="row row-custom section-faculty mb-3">
          <div className="col-lg-12">
            <div className="box box-border-radius box-shadow bg-white">
              <div className="inner-wrap">
                <div className="box-top d-flex justify-content-between">
                  <h2 className="box-subhead mw-100">
                    <span className="icon-regular icon-user-tie"></span> Faculty
                  </h2>
                  <div>
                    <h3 className="ar">{this.props.facultyInfo.asof}</h3>
                    <em>{this.props.facultyInfo.updated}</em>
                  </div>
                </div>
                <div className="box-middle color-white">
                  <div className="row row-custom">
                    <div className="col-md-3 mb-2">
                      <div className="box-color box-color-blue mb-2 h-100">
                        <h4 className="color-white">Full-Time Faculty</h4>
                        <div className="box-number font-100 text-center">
                          {this.props.facultyInfo.fullTime}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-2">
                      <div className="box-color box-color-blue mb-2 h-100">
                        <h4 className="color-white">Student-Facutly Ratio</h4>
                        <div className="box-number font-100 text-center">
                          {this.props.facultyInfo.studentFacultyRatio}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-2">
                      <div className="box-color box-color-blue mb-2 h-100">
                        <h4 className="color-white">
                          Faculty with Highest Degree in Field
                        </h4>
                        <div className="box-number font-100 text-center">
                          {this.props.facultyInfo.highestDegreeField.number}
                        </div>
                        <div className="text-center font20">
                          <strong>
                            {this.props.facultyInfo.highestDegreeField.number +
                              "%"}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-2">
                      <div className="box-color box-color-blue mb-2 h-100">
                        <h4 className="color-white">
                          Average Undergraduate Class Size
                        </h4>
                        <div className="box-number font-100 text-center">
                          {this.props.facultyInfo.averageUndergraduateClassSize}
                        </div>
                        <div className="text-center">
                          <strong>Students</strong>
                        </div>
                      </div>
                    </div>
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

export default ShowInstitutionFacultyInfo;
