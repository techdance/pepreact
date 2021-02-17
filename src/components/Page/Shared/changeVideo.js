import React from "react";

//  this component should be merged with changePicture.js but images don't have "upload" button in the design.
//     but not sure how often the app will need uploading of videos.
//     if merging, add new prop for fileType (images for images and videos for vidoes)

export class ChangeVideoImage extends React.Component {
  render() {
    let introVideo = this.props.introVideo;

    return (
      <>
        <div className="col-md-6">
          <div className="wrap-video img-resp mb-2">
            <img src={introVideo} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export class ChangeVideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedVideo: null };

    this.onFileChange = this.onFileChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedVideo: event.target.files[0] });

    // Request made to the backend api to send the file object formatted as above.
  };

  handleClick = (event) => {
    //  calls the file input tag with ref=videoUpload
    event.preventDefault();
    this.refs.videoUpload.click();
  };

  render() {
    return (
      <>
        <p>
          <a
            href="#0"
            className="btn btn-blue btn-w-100"
            onClick={this.handleClick}
          >
            Upload Video
          </a>
        </p>
        <input
          id="videoUpload"
          ref="videoUpload"
          accept="video/*" // this would be a new prop if merged with changeImage.js
          type="file"
          style={{
            visibility: "hidden",
            width: 0,
            height: 0,
          }}
          onChange={this.onFileChange}
          disabled
        />
      </>
    );
  }
}
