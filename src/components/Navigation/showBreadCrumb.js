import React from "react";

class ShowBreadCrumb extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {this.props.breadCrumbList.map((breadCrumb, index) => (
              <li className="breadcrumb-item">
                <a index={index} href="#">
                  {breadCrumb}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </>
    );
  }
}

export default ShowBreadCrumb;
