import React from "react";

class EditInstitutionOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Overview;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let Overview = this.state;
    Overview[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("Overview", Overview);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let Overview = this.state;
    Overview[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("Overview", Overview);
  };

  render() {
    const {
      description1,
      foundedYear,
      academicCalendar,
      type,
      primaryLanguage,
      otherLanguages,
      president,
      employees,
      alumni,
      image,
      facebookLink,
      twitterLink,
      instagramLink,
      linkedinLink,
      youtubeLink,
    } = this.state;

    return (
      <>
        <section className="wrap-institution">
          <div className="row row-custom ">
            <div className="col-lg-12 mb-4">
              <div className="personal box box-border-radius box-shadow bg-white position-relative">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-school"></span>
                      Institution Overview
                    </h2>
                  </div>
                  <div className="box-middle">
                    <div className="row row-custom">
                      <div className="col-md-9">
                        <div className="form-group mb-3">
                          <textarea
                            className="input textarea"
                            rows="6"
                            name="description1"
                            value={description1}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>Founded</label>
                              <input
                                type="text"
                                name="foundedYear"
                                value={foundedYear}
                                className="input"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Academic Calendar</label>
                              <input
                                type="text"
                                name="academicCalendar"
                                value={academicCalendar}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>Type</label>
                              <select className="input select">
                                <option>Not-for-Profit</option>
                                <option>Private</option>
                                <option>Coed</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>Language</label>
                              <input
                                type="text"
                                name="primaryLanguage"
                                value={primaryLanguage}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Other Languages</label>
                              <select className="input select">
                                <option>Spanish</option>
                                <option>Mandarin</option>
                                <option>French</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>President</label>
                              <input
                                type="text"
                                name="president"
                                value={president}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Total Employees</label>
                              <input
                                type="text"
                                name="employees"
                                value={employees}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Alumni</label>
                              <input
                                type="text"
                                name="alumni"
                                value={alumni}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 img-resp">
                        <img
                          src="images/EditChangePhoto.png"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-share"></span>Social
                      Media
                    </h2>
                  </div>
                  <div className="box-middle">
                    <div className="row row-custom">
                      <div className="col-md-4">
                        <div className="form-group mb-2">
                          <label>Facebook</label>
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                            <input
                              type="text"
                              name="facebookLink"
                              value={facebookLink}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <label>Twitter</label>
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                            <input
                              type="text"
                              name="twitterLink"
                              value={twitterLink}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <label>Instagram</label>
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                            <input
                              type="text"
                              name="instagramLink"
                              value={instagramLink}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-2">
                          <label>LinkedIn</label>
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                            <input
                              type="text"
                              name="linkedinLink"
                              value={linkedinLink}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <label>YouTube</label>
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                            <input
                              type="text"
                              name="youtubeLink"
                              value={youtubeLink}
                              onChange={this.handleChange}
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-2 mt-4">
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript::void(0);"
                              className="color-orange font20 mr-1"
                            >
                              <i className="fas fa-plus-circle"></i>
                            </a>
                          </div>
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

export default EditInstitutionOverview;
