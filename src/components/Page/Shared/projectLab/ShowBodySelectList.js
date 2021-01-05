import React from "react";
import SlideToggle from "../UI/SlideToggle.js";

export default class ShowBodySelectList extends React.Component {
  render() {
    const { itemList, itemIndex, clickCallBack } = this.props;

    return (
      <SlideToggle>
        <div className="position-relative week-co">
          <a href="#0" className="btn-week">
            <span className="icon-solid icon-plus-circle cl-asset-type-d"></span>
          </a>

          <div className=" dropdown_week">
            {itemList.map((item, index) => (
              <div
                key={index}
                className="dropdown_week_inner btn-course-objetive-week"
                data-btn={index + 1}
                data-week={itemIndex + 1}
                onClick={(e) => clickCallBack(itemIndex, index, e)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SlideToggle>
    );
  }
}
