import React from "react";

export class ShowBodyActivitiesList extends React.Component {
  render() {
    const { activities, itemIndex, removeActivity, handleChange } = this.props;

    return (
      <>
        {activities.map((activity, index) => (
          <div
            key={index}
            className={
              "td-activity-" +
              (itemIndex + 1) +
              (index + 1) +
              " td-activity-" +
              (itemIndex + 1) +
              (index + 1) +
              "-input"
            }
          >
            <div className="d-flex align-items-center form-group mb-1">
              <a
                href="#0"
                className="color-orange font20 mr-1"
                onClick={(e) => removeActivity(itemIndex, index, e)}
              >
                <i className="fas fa-minus-circle fas-16"></i>
              </a>

              <input
                type="text"
                value={activity}
                name="activity"
                className="input2 bg-grey-light border-none"
                onChange={(e) => handleChange(itemIndex, index, e)}
              />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export class ShowBodyAddActivity extends React.Component {
  render() {
    const { itemIndex, addActivity } = this.props;

    return (
      <a
        href="#0"
        className="add-activity"
        data-activity={itemIndex + 1}
        onClick={(e) => addActivity(itemIndex, e)}
      >
        <span className="icon-solid icon-plus-circle cl-asset-type-d"></span>
      </a>
    );
  }
}
