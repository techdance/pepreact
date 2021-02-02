import React from "react";

export function ProjectLabShowListHeader(props) {
  const { title, modalName } = props;
  return (
    <table className="table table4">
      <thead>
        <tr>
          <th className="title-head-th-1" scope="col">
            {title}
          </th>
          <th scope="col" className="text-right">
            <a href="#0" data-target={modalName} data-toggle="modal">
              <i className="fas fa-edit"></i>
            </a>
          </th>
        </tr>
      </thead>
    </table>
  );
}

export function ProjectLabShowListBodywithScroll(props) {
  const { list } = props;

  return (
    <div className="wrap-table-courses table table4">
      <table className="">
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <th className="title-row-th-1" scope="row"></th>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
