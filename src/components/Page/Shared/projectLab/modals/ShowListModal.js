import React from "react";

import { removeFromArray } from "../../usefulFunctions.js";

export function ShowListModalHeader(props) {
  const { headerString } = props;
  return (
    <div className="modal-header position-relative text-center">
      <div className="text-left font15 m-auto">
        <strong>{headerString}</strong>
      </div>
      <div className="toltip-close3">
        <a href="#0" data-dismiss="modal">
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
    </div>
  );
}

export class ShowListModalSavedItems extends React.Component {
  constructor(props) {
    super(props);

    const { items } = this.props;
    // if placeholderString doesn't exist then don't implement Add button in this component - call ShowListModalNewItem instead
    const placeholderString =
      this.props.placeholderString && this.props.placeholderString;
    this.state = {
      items: items,
      placeholderString: placeholderString,
      addItem: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeItemFromList = this.removeItemFromList.bind(this);
    this.updateAddItem = this.updateAddItem.bind(this);
    this.addItemToList = this.addItemToList.bind(this);
  }

  handleChange(index, event) {
    const { value } = event.target;

    let { items } = this.state;
    items[index] = value;
    this.setState({ items: items });
  }

  removeItemFromList(index) {
    let { items } = this.state;
    items = removeFromArray(items, index);
    this.setState({ items: items });
  }

  updateAddItem(event) {
    const { value } = event.target;
    let { addItem } = this.state;
    addItem = value;
    this.setState({ addItem: addItem });
  }

  addItemToList() {
    let { items, addItem } = this.state;
    items.push(addItem);
    this.setState({ items: items });
  }

  render() {
    const { items, placeholderString } = this.state;

    return (
      <>
        {items.map((item, index) => (
          <div className="row mb-2" key={index}>
            <div className="col-md-12 d-flex">
              <a
                href="#0"
                className="cl-asset-type-d cl-hover-black font20 mr-1"
                onClick={(e) => this.removeItemFromList(index, e)}
              >
                <i className="fas fa-minus-circle"></i>
              </a>
              <input
                className="w-100"
                type="text"
                value={item}
                onChange={(e) => this.handleChange(index, e)}
              />
            </div>
          </div>
        ))}
        {placeholderString ? (
          <>
            <div className="row mb-3">
              <div className="col-md-12">
                <input
                  className="w-100"
                  type="text"
                  placeholder={placeholderString}
                  onChange={this.updateAddItem}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <a
                  href="#0"
                  className="btn btn-blue btn-w-100"
                  onClick={this.addItemToList}
                >
                  Add
                </a>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export function ShowListModalNewItem(props) {
  const { placeholderString } = props;
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-12">
          <input
            className="w-100"
            type="text"
            placeholder={placeholderString}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <a href="#0" className="btn btn-blue btn-w-100">
            Add
          </a>
        </div>
      </div>
    </>
  );
}

export function ShowListModalButtons(props) {
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-between">
        <div>
          <a href="#0" className="btn btn-grey mr-2">
            Learn More
          </a>
        </div>
        <div className="d-flex">
          <a href="#0" className="btn btn-grey mr-2" data-dismiss="modal">
            Cancel
          </a>
          <a href="#0" className="btn btn-blue" data-dismiss="modal">
            Save
          </a>
        </div>
      </div>
    </div>
  );
}
