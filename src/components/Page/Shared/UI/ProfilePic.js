import React from "react";
import Loader from "react-loader-spinner";

  let ImageShow = ({image,styletag={}, alt="", loaderType="" }) =>{
    if(image){
    return (<img
      className="img-circle img-border-blue"
      src={image}
      style={styletag}
      alt={alt}
    /> )
    } else {
      console.log(' From else Section : ')
      return (
        <Loader
          type= { loaderType ||"ThreeDots" }
          color="#00BFFF"
          height={50}
          width={50}
          visible={true}
          timeout={10000}
        />)
    }

  }



export default ImageShow;