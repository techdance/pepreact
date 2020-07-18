import React from "react";

class ShowBreadCrumb extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {this.props.breadCrumbList.map((breadCrumb, index) => (
              <li key={index} className="breadcrumb-item">
                <a href="#">{breadCrumb}</a>
              </li>
            ))}
          </ol>
        </nav>
      </>
    );
  }
}

export default ShowBreadCrumb;
