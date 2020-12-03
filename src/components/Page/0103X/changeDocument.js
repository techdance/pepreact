import React from "react";

class ChangeDocument extends React.Component {
  constructor(props) {
    super(props);
    this.hiddenFileInput = null; // this is the hidden <input> DOM element

    // When the ref is called within the <input> it gets assigned to the variable hiddenFileInput
    this.setHiddenFileInputRef = (element) => {
      this.hiddenFileInput = element;
    };

    this.state = { selectedDocument: null };

    this.onFileChange = this.onFileChange.bind(this);
  }

  handleClick = (event) => {
    // when button is clicked, call the click function of the hidden input element
    this.hiddenFileInput.click();
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedDocument: event.target.files[0] });

    // Request made to the backend api to send the file object formatted as above.
  };

  render() {
    return (
      <>
        <button className="btn btn-blue btn-w-100" onClick={this.handleClick}>
          Upload Course Control Document
        </button>{" "}
        <sup>
          <i className="fas fa-info-circle fa-2x cl-blue"></i>
        </sup>
        <input
          ref={this.setHiddenFileInputRef}
          accept=".doc, .pdf"
          type="file"
          style={{
            visibility: "hidden",
            width: 0,
            height: 0,
          }}
          onChange={this.onFileChange}
        />
      </>
    );
  }
}

export default ChangeDocument;
