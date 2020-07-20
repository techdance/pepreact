import React from "react";

class ShowRetentionRateDimensions extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-4">
          <div className="box box-border-radius box-shadow bg-white pt-4">
            <div className="inner-wrap">
              <div className="box-middle list-bullet list-bullet-mb-5">
                <h3 className="color-orange font18 font-weight-bold mb-4">
                  View Retention Rates by
                </h3>

                <ul>
                  {this.props.retentionRateDimensions.map(
                    (dimension, index) => (
                      <li>
                        <a href="#">{dimension}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowRetentionRateDimensions;
