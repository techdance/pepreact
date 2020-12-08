import React from "react";

class ShowSearchBox extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <>
        <div className="wrap-top-search">
          {edit === "true" ? (
            <div class="d-flex">
              <div class="top-search">
                <div class="box-search">
                  <form action="">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div class="box-question">
                  <a href="#0">
                    <span class="icon-solid icon-input-search"></span>
                  </a>
                </div>
              </div>
              <div>
                <a class="btn btn-blue ml-2" href="#0">
                  Save Profile
                </a>
              </div>
            </div>
          ) : (
            <div class="d-flex">
              <div className="top-search">
                <div className="box-search">
                  <form action="">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="box-question">
                  <a href="#0">
                    <span className="icon-solid icon-input-search"></span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ShowSearchBox;
