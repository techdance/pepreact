import React from "react";

class ShowBreadCrumb extends React.Component {
  render() {
    // set local variable to bread crumb list and retrieve last entry to make it active
    let breadCrumbList = this.props.breadCrumbList;
    let crumbLength = breadCrumbList.length;
    let lastCrumb = breadCrumbList[crumbLength - 1];

    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {breadCrumbList.map((breadCrumb, index) => (
              <li
                key={index}
                className={
                  breadCrumb === lastCrumb
                    ? "breadcrumb-item active"
                    : "breadcrumb-item"
                }
              >
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
