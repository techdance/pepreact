import React from "react";
import useService from '../../../services/User';
import AuthService from "../../../services/AuthService";
import { ToastContainer } from "react-toastr";

class ChangePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: null };

    this.onFileChange = this.onFileChange.bind(this);
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedImage: event.target.files[0] });
    const  collaboratedUserProfileimageSave = useService.collaboratedUserProfileimageSave({ params: {token:  AuthService.getToken()}, dataObj:null }); 
    collaboratedUserProfileimageSave.then(res=>{

    }, err=>{
      
    })

    // Request made to the backend api to send the file object formatted as above.
  };

  render() {
    let { image } = this.props;
    return (
      <>
        <label for="image-upload">
          {this.state.selectedImage ? (
            <img
              src={image} // this should be the this.state.selectedImage but I'm not saving in onFileChange()
              alt=""
              className="img-responsive"
            ></img>
          ) : (
            <img src={image} alt="" className="img-responsive"></img>
          )}
        </label>
        <input
          id="image-upload"
          accept="image/*"
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

export default ChangePicture;
