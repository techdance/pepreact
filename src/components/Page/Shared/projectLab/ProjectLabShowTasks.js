import React from "react";
import Task from "../../../../classes/Tasks";
import CalendarSelector from "../UI/CalendarSelector.js";
import { statusDoughnut } from "../UI/StatusDoughnut.js";

export default class ProjectLabShowTasks extends React.Component {
  constructor(props) {
    super(props);

    const { tasks } = this.props;
    this.state = {
      tasks: tasks,
    };

    this.showTask = this.showTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    // update the Project Status doughnut chart to represent completion status of tasks; uses global object StatusDoughnut but should use Context instead
    const { tasks } = this.state;

    const ref = statusDoughnut.ref;
    let percentComplete = Number(statusDoughnut.percentComplete);
    for (const task of tasks) {
      if (task.status === "Completed") percentComplete += 9;
    }
    percentComplete = percentComplete >= 99 ? 100 : percentComplete;

    ref.options.data[0].dataPoints[0].y = percentComplete;
    ref.options.data[0].dataPoints[1].y = 100 - percentComplete;
    ref.options.subtitles[0].text = percentComplete + "%";

    ref.render();
  }

  handleChange = (index, event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    let { tasks } = this.state;
    tasks[index][name] = value;

    this.setState({ tasks: tasks });
  };

  addTask() {
    // is this a db round-trip rather than a set state?
    let { tasks } = this.state;

    let newTask = new Task();
    // needs to set projectid and step here. these might be foreign keys that automatically get added?
    if (tasks[0]) {
      // dummy function to set project id and step based on existing tasks.
      newTask.projectId = tasks[0].projectId;
      newTask.step = tasks[0].step;
    }

    tasks.push(newTask);
    this.setState({ tasks: tasks });
  }

  showTask(task, index) {
    return (
      <>
        <td className="td-valign-bottom td-icon-arrow td-icon-arrow">
          <i className="fas fa-chevron-circle-right color-orange fa-2x"></i>
        </td>
        <td className="td-valign-top">
          <div className="td-label">Task</div>

          {/* how to allow a new task name to be edited? */}
          <div className="td-text pt-1">{task.name}</div>
        </td>
        <td className="td-valign-top">
          <div className="td-label">Status</div>
          <div className="td-text">
            <select className="form-control" name="status">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </td>
        <td className="td-valign-top">
          <div className="td-label">Assigned To</div>
          <div className="td-text">
            <select className="form-control" name="assignedTo">
              <option>Please Choose...</option>
              <option>Bradley Dexter</option>
              <option>Inez Campos</option>
            </select>
          </div>
        </td>
        <td className="td-valign-top" width="180">
          <div className="td-label">Due Date</div>
          <div className="td-text">
            <div className="wrap-input-calendar">
              <CalendarSelector
                id={"dueDate-" + index}
                className={"form-control icon-cal datepicker" + index}
                name={"dueDate"}
                value={task.dueDate}
                onChange={(e) => this.handleChange(index, e)} // component uses event bubbling to handle changes but CalendarSelector requires handlechange in props;
              />
            </div>
          </div>
        </td>
        <td className="td-valign-top">
          <div className="td-label">Assets</div>
          <div className="td-text d-flex">
            <span className="icon-com-clip mr-2">
              <i className="fal fa-comment-alt-lines"></i> 2
            </span>
            <span className="icon-com-clip">
              <i className="fal fa-paperclip"></i> 1
            </span>
          </div>
        </td>
      </>
    );
  }

  render() {
    let { tasks } = this.state;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap">
                <div className="box-top position-relative">
                  <h3 className="box-subhead">
                    <i className="fas fa-tasks"></i> Task Overview
                  </h3>
                  <a href="#0" className="icon-setting icon-box">
                    <i className="fas fa-cog"></i>
                  </a>
                </div>

                <div className="box-middle">
                  <div className="table-wrapper-scroll-x my-custom-scrollbar">
                    <table className="table table-task">
                      <tbody>
                        {tasks.map((task, index) => (
                          <tr
                            key={index}
                            onChange={(e) => this.handleChange(index, e)} // use event bubbling to update with any changes
                          >
                            {this.showTask(task, index)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="ar mt-2">
                      <a
                        href="#0"
                        data-toggle="modal"
                        data-target="#addTask"
                        className="btn btn-blue"
                        onClick={this.addTask}
                      >
                        ADD
                      </a>
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
