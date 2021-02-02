import React from "react";

export default class ShowBodySelectedFromList extends React.Component {
  render() {
    const { itemList, itemIndex, removeItem } = this.props;

    return (
      <>
        {itemList.map((item, index) => (
          <div
            onClick={
              removeItem !== undefined
                ? (e) => removeItem(itemIndex, index, e)
                : null
            }
            key={index}
            className={
              "pl-25 mb-2 font14 wrap-fontawesome wrap-course-objectives-content-week-" +
              (itemIndex + 1) +
              " text-left"
            }
          >
            {/* always show minus circle for the list to hint that it can be removed */}
            {/* <i className="fas fa-chevron-circle-right color-orange fa-2x ml--25"></i> */}
            <i className="fas fa-minus-circle color-orange fa-2x ml--25"></i>
            {item}
          </div>
        ))}
      </>
    );
  }
}
