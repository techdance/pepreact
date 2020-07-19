import React from "react";

class ShowTaskAndOverRides extends React.Component {
  render() {
    const tasks = this.props.tasksandOverrides;

    const tasksandOverrides = {
      title: "Tasks & Overrides",
      titleIcon: "icon-regular icon-clipboard-list",
      icon: "icon-duotone icon-clipboard-list icon-size-50",
    };

    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className={tasksandOverrides.titleIcon}></span>
                  <a href="#" className="hover-underline color-black">
                    {tasksandOverrides.title}
                  </a>
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <i className="icon-solid fa-cog"></i>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span
                  className={
                    tasksandOverrides.icon +
                    " cl-primary-asset-type-f cl-secondary-asset-type-f"
                  }
                ></span>
              </div>
            </div>
            <div className="box-bottom list-bullet list-task mt-5">
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    <a href={task.link}>
                      {task.name}
                      {task.count && (
                        <span className="note-list">
                          <span className="outer">{task.count}</span>
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <a href="#" className="btn btn-blue">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowTaskAndOverRides;
