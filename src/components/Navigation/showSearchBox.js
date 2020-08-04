import React from "react";

class ShowSearchBox extends React.Component {
  render() {
    return (
      <>
        <div className="wrap-top-search">
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
      </>
    );
  }
}

export default ShowSearchBox;
