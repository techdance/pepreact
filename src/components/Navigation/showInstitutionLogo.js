import React from "react";

export default function ShowInstitutionLogo(props) {
  const { logoA, logoB } = props;

  return (
    <>
      <div id="wrap-logo">
        <a href="#0">
          <img src={logoA} alt="Institution Logo Part 1" />
          <img
            className="group-hide ml-1"
            src={logoB}
            alt="Institution Logo Part 2"
          />
        </a>
        <a href="#0" id="menu-button-responsive">
          <i className="fas fa-bars"></i>
        </a>
      </div>
    </>
  );
}
