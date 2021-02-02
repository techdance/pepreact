import React from "react";

export class ShowBodyContentList extends React.Component {
  render() {
    const { contents, itemIndex, removeContent, handleChange } = this.props;

    return (
      <>
        {contents.map((content, index) => (
          <div
            key={index}
            className={
              "td-content-" +
              (itemIndex + 1) +
              (index + 1) +
              " td-content-" +
              (itemIndex + 1) +
              (index + 1) +
              "-input"
            }
          >
            <div className="d-flex align-items-center form-group mb-1">
              <a
                href="#0"
                className="color-orange font20 mr-1"
                onClick={(e) => removeContent(itemIndex, index, e)}
              >
                <i className="fas fa-minus-circle fas-16"></i>
              </a>

              <textarea
                className="input2 bg-grey-light border-none"
                value={content}
                name="content"
                onChange={(e) => handleChange(itemIndex, index, e)}
              >
                {content}
              </textarea>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export class ShowBodyAddContent extends React.Component {
  render() {
    const { itemIndex, addContent } = this.props;

    return (
      <>
        <a
          href="#0"
          className="add-content"
          data-content={itemIndex + 1}
          onClick={(e) => addContent(itemIndex, e)}
        >
          <span className="icon-solid icon-plus-circle cl-asset-type-d"></span>
        </a>
      </>
    );
  }
}
