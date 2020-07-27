import React from "react";

class EditInstitutionChangePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: null };

    // this.handleChange = this.handleChange.bind(this);
    // this.passChangeUp = this.passChangeUp.bind(this);

    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedImage: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Do whatever we need to create an object to send to API

    // Details of the uploaded file
    console.log(this.state.selectedImage);

    // Request made to the backend api to send the file object formatted as above.
  };

  // If an image has been selected then show Current selected file information.
  //  Otherwise, show instructions about how to pick an image to upload.
  fileData = () => {
    if (this.state.selectedImage) {
      return (
        <div>
          <h4>File Details:</h4>
          <p>File Name: {this.state.selectedImage.name}</p>
          <p>File Type: {this.state.selectedImage.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>To Change IMAGE: </h4> <br />{" "}
          <h4>1. Pick a new image using "Choose File" button below </h4> <br />{" "}
          <h4>2. Then press the "Upload" button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.fileData()}
        <div>
          <br />
          <input
            type="file"
            className="form-control-file"
            onChange={this.onFileChange}
            id="image"
            name="image"
            value=""
            accept="image/png, image/jpeg"
          />
        </div>
        <div>
          <br />
          <button className="form-control" onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
      </div>
    );
  }
}

export default EditInstitutionChangePicture;
