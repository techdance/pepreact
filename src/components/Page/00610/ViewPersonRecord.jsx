import React from "react";

import { getPersonRecordByID } from "../../../repositories/PersonRecordRepository";

export default function ViewPersonRecord() {
  const url = new URL(document.location.href);
  const personRecordId = url.searchParams.get("personrecordid");

  const personRecord = getPersonRecordByID(personRecordId);

  if (!personRecordId || !personRecord) return null; // either no parameter or db record not found;

  const {
    personalInformation,
    communicationPreferences,
    contactInformation,
    emergencyContacts,
    credentials,
  } = personRecord;

  function ViewPersonRecordSummaryTile() {
    return (
      <div className="box box-border-radius box-shadow bg-white height-auto mb-3">
        <div className="row">
          <div className="col-md-3">
            <img
              src={"images/" + personalInformation.image}
              alt={personalInformation.name}
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-user-profile mr-2"></span>{" "}
                {personalInformation.firstName +
                  " " +
                  personalInformation.lastName}
              </div>
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-id-card mr-2"></span>{" "}
                123456789001
              </div>
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-id-badge mr-2"></span>{" "}
                {personalInformation.role}
              </div>
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-user-tie mr-2"></span>{" "}
                {personalInformation.title}
              </div>
              <div className="col-md-4 mb-4 color-black"></div>
              <div className="col-md-4 mb-4 color-black"></div>
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-user-shield mr-2"></span>{" "}
                Iowa Campus
              </div>
              <div className="col-md-4 mb-4 color-black">
                <span className="icon-regular icon-id-card-alt mr-2"></span>{" "}
                {personalInformation.department}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ViewPersonRecordPersonalInformationTile() {
    return (
      <div className="card mb-3 pb-2 border-none border-radius-10 box-shadow">
        <div className="pt-3 pr-3 pb-0 pl-3" id="heading-1">
          <h2
            className="box-subhead pl-0 font24 line-height-1 color-black mw-100 mb-0 cursor-pointer pr-0"
            data-toggle="collapse"
            data-target="#collapse-1"
            aria-expanded="true"
            aria-controls="collapse-1"
          >
            Personal Information
          </h2>
        </div>

        <div
          id="collapse-1"
          className="collapse show p-4 color-black"
          aria-labelledby="heading-1"
          data-parent="#accordionTab"
        >
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>Prefix</strong>
              <br />
              {personalInformation.namePrefix}.
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>First Name</strong>
              <br />
              {personalInformation.firstName}
            </div>
            <div className="col-md-3">
              <strong>Middle Name</strong>
              <br />
              {personalInformation.middleName}
            </div>
            <div className="col-md-3">
              <strong>Last Name</strong>
              <br />
              {personalInformation.lastName}
            </div>
            <div className="col-md-3">
              <strong>Suffix</strong>
              <br />
              {personalInformation.suffix}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>Preferred Name</strong>
              <br />
              {personalInformation.preferredName}
            </div>
            <div className="col-md-3">
              <strong>Position</strong>
              <br />
              {personalInformation.title}
            </div>
            <div className="col-md-3">
              <strong>Maiden Name</strong>
              <br />
              {personalInformation.maidenName}
            </div>
            <div className="col-md-3">
              <strong>Age</strong>
              <br />
              {personalInformation.age}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>Alternative ID Number</strong>
              <br />
              {personalInformation.alternateId}
            </div>
            <div className="col-md-3">
              <strong>Social Security</strong>
              <br />
              {personalInformation.ssn}
            </div>
            <div className="col-md-3">
              <strong>Alien ID Number</strong>
              <br />
              {personalInformation.alienId}
            </div>
            <div className="col-md-3">
              <strong>Birth Date</strong>
              <br />
              {personalInformation.birthDate}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <strong>Gender</strong>
              <br />
              {personalInformation.gender}
            </div>
            <div className="col-md-3">
              <strong>Marital Status</strong>
              <br />
              {personalInformation.maritalStatus}
            </div>
            <div className="col-md-3">
              <strong>Citizenship</strong>
              <br />
              {personalInformation.citizenship}
            </div>
            <div className="col-md-3">
              <strong>Nationality</strong>
              <br />
              {personalInformation.nationality}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>Ethnicity 1</strong>
              <br />
              {personalInformation.ethnicity1}
            </div>
            <div className="col-md-3">
              <strong>Ethnicity 2</strong>
              <br />
              {personalInformation.ethnicity2}
            </div>
            <div className="col-md-3">
              <strong>Race 1</strong>
              <br />
              {personalInformation.race1}
            </div>
            <div className="col-md-3">
              <strong>Race 2</strong>
              <br />
              {personalInformation.race2}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <strong>Veteran Status</strong>
              <br />
              {personalInformation.veteranStatus}
            </div>
            <div className="col-md-3">
              <strong>Military Branch</strong>
              <br />
              {personalInformation.militaryBranch}
            </div>
            <div className="col-md-3">
              <strong>Disability </strong>
              <br />
              {personalInformation.disability}
            </div>
            <div className="col-md-3">
              <strong>Accommodation</strong>
              <br />
              {personalInformation.accommodation}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ViewPersonRecordCommunicationPrefernces() {
    return (
      <div className="card mb-3 pb-2 border-none border-radius-10 box-shadow">
        <div className="pt-3 pr-3 pb-0 pl-3" id="heading-2">
          <h2
            className="box-subhead pl-0 font24 line-height-1 color-black mw-100 mb-0 cursor-pointer pr-0 collapsed"
            data-toggle="collapse"
            data-target="#collapse-2"
            aria-expanded="false"
            aria-controls="collapse-2"
          >
            Communication Preferences
          </h2>
        </div>
        <div
          id="collapse-2"
          className="collapse p-4 color-black"
          aria-labelledby="heading-2"
          data-parent="#accordionTab"
        >
          <div className="row">
            <div className="col-md-12">
              <strong>Language</strong>
            </div>
          </div>
          <div className="row mb-3 ml-2">
            <div className="col-md-3">
              <strong>Primary</strong>
              <br />
              {communicationPreferences.primaryLanguage}
            </div>
            <div className="col-md-3">
              <strong>Secondary</strong>
              <br />
              {communicationPreferences.secondaryLanguage}
            </div>
            <div className="col-md-3">
              <strong>Tertiary</strong>
              <br />
              {communicationPreferences.tertiaryLanguage}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <strong>Channels</strong>
            </div>
          </div>
          <div className="row mb-3 ml-2">
            <div className="col-md-3">
              <strong>Office Email</strong>
              <br />
              {communicationPreferences.emailAddress}
            </div>
            <div className="col-md-3">
              <strong>Office Phone</strong>
              <br />
              {communicationPreferences.officePhone}
            </div>
            <div className="col-md-3">
              <strong>Extension</strong>
              <br />
            </div>
            <div className="col-md-3">
              <strong>Website</strong>
              <br />
              {communicationPreferences.url}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ViewPersonRecordContactInformation() {
    const { primary, secondary } = contactInformation;

    function ViewPersonRecordContactInformationShowAddress({
      title,
      addressInformation,
    }) {
      return (
        <>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
              <div>
                <strong>{title}</strong>
              </div>
            </div>
          </div>
          <div className="row mb-3 ml-1">
            <div className="col-md-3">
              <strong>Street Address</strong>
              <br />
              {addressInformation.streetAddress}
            </div>
          </div>
          <div className="row mb-3 ml-1">
            <div className="col-md-3">
              <strong>City</strong>
              <br />
              {addressInformation.city}
            </div>
            <div className="col-md-3">
              <strong>State or Province</strong>
              <br />
              {addressInformation.state}
            </div>
            <div className="col-md-3">
              <strong>Postal Code</strong>
              <br />
              {addressInformation.postalCode}
            </div>
          </div>
          <div className="row mb-3 ml-2">
            <div className="col-md-3">
              <strong>County</strong>
              <br />
              {addressInformation.county}
            </div>
            <div className="col-md-3">
              <strong>Country</strong>
              <br />
              {addressInformation.country}
            </div>
            <div className="col-md-3">
              <strong>Mail Name</strong>
              <br />
              {addressInformation.mailName}
            </div>
          </div>
        </>
      );
    }

    function ViewPersonRecordContactInformationShowPhone({
      title,
      phoneInformation,
    }) {
      return (
        <>
          <div className="col-md-3">
            <strong>{title + " Phone Number"}</strong>
            <br />
            {phoneInformation.phoneNumber}
          </div>
          <div className="col-md-3">
            <strong>Type</strong>
            <br />
            {phoneInformation.phoneNumberType}
          </div>
        </>
      );
    }

    function ViewPersonRecordContactInformationShowEmail({
      title,
      emailInformation,
    }) {
      return (
        <>
          <div className="col-md-3">
            <strong>{title + " Email"}</strong>
            <br />
            {emailInformation.emailAddress}
          </div>
          <div className="col-md-3">
            <strong>Type</strong>
            <br />
            {emailInformation.emailAddressType}
          </div>
        </>
      );
    }

    return (
      <div className="card mb-3 pb-2 border-none border-radius-10 box-shadow">
        <div className="pt-3 pr-3 pb-0 pl-3" id="heading-3">
          <h2
            className="box-subhead pl-0 font24 line-height-1 color-black mw-100 mb-0 cursor-pointer pr-0 collapsed"
            data-toggle="collapse"
            data-target="#collapse-3"
            aria-expanded="false"
            aria-controls="collapse-3"
          >
            Contact Information
          </h2>
        </div>
        <div
          id="collapse-3"
          className="collapse p-4 color-black"
          aria-labelledby="heading-3"
          data-parent="#accordionTab"
        >
          <ViewPersonRecordContactInformationShowAddress
            title="Primary"
            addressInformation={primary}
          />
          <ViewPersonRecordContactInformationShowAddress
            title="Secondary"
            addressInformation={secondary}
          />
          <div className="row mb-3">
            <ViewPersonRecordContactInformationShowPhone
              title="Primary"
              phoneInformation={primary}
            />
            <ViewPersonRecordContactInformationShowPhone
              title="Secondary"
              phoneInformation={secondary}
            />
            <ViewPersonRecordContactInformationShowEmail
              title="Primary"
              emailInformation={primary}
            />
            <ViewPersonRecordContactInformationShowEmail
              title="Secondary"
              emailInformation={secondary}
            />
          </div>
        </div>
      </div>
    );
  }

  function ViewPersonRecordEmergencyContact() {
    const { primary, secondary } = emergencyContacts;

    function ViewPersonRecordEmergencyContactShow({ emergencyInformation }) {
      return (
        <>
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Name</strong>
              <br />
              {emergencyInformation.name}
            </div>
            <div className="col-md-6">
              <strong>Relationship</strong>
              <br />
              {emergencyInformation.relationship}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Street Address</strong>
              <br />
              {emergencyInformation.streetAddress}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>City</strong>
              <br />
              {emergencyInformation.city}
            </div>
            <div className="col-md-3">
              <strong>State or Province</strong>
              <br />
              {emergencyInformation.state}
            </div>
            <div className="col-md-3">
              <strong>Postal Code</strong>
              <br />
              {emergencyInformation.postalCode}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <strong>County</strong>
              <br />
              {emergencyInformation.county}
            </div>
            <div className="col-md-3">
              <strong>Country</strong>
              <br />
              {emergencyInformation.country}
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3">
              <strong>Phone Number</strong>
              <br />
              {emergencyInformation.phoneNumber}
            </div>
            <div className="col-md-3">
              <strong>Type</strong>
              <br />
              {emergencyInformation.phoneNumberType}
            </div>
            <div className="col-md-3">
              <strong>Email</strong>
              <br />
              {emergencyInformation.emailAddress}
            </div>
            <div className="col-md-3">
              <strong>Type</strong>
              <br />
              {emergencyInformation.emailAddressType}
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="card mb-3 pb-2 border-none border-radius-10 box-shadow">
        <div className="pt-3 pr-3 pb-0 pl-3" id="heading-4">
          <h2
            className="box-subhead pl-0 font24 line-height-1 color-black mw-100 mb-0 cursor-pointer pr-0 collapsed"
            data-toggle="collapse"
            data-target="#collapse-4"
            aria-expanded="false"
            aria-controls="collapse-4"
          >
            Emergency Contacts
          </h2>
        </div>
        <div
          id="collapse-4"
          className="collapse p-4"
          aria-labelledby="heading-4"
          data-parent="#accordionTab"
        >
          <ViewPersonRecordEmergencyContactShow
            emergencyInformation={primary}
          />
          <ViewPersonRecordEmergencyContactShow
            emergencyInformation={secondary}
          />
        </div>
      </div>
    );
  }

  function ViewPersonRecordCredentialsTile() {
    const {
      degrees,
      additionalGraduateHours,
      certificates,
      certifications,
    } = credentials;

    function ViewPersonRecordCredentialsShowDegrees() {
      return degrees.map((degree, index) => (
        <div className="row mb-3 ml-2" key={index}>
          <div className="col-md-3">
            <strong>Degree</strong>
            <br />
            {degree.name}
          </div>
          <div className="col-md-3">
            <strong>Discipline</strong>
            <br />
            {degree.discipline}
          </div>
          <div className="col-md-3">
            <strong>Institution </strong>
            <br />
            {degree.institution}
          </div>
          <div className="col-md-3">
            <strong>Graduation Year</strong>
            <br />
            {degree.graduationYear}
          </div>
        </div>
      ));
    }

    function ViewPersonRecordCredentialsShowAdditionalHours() {
      return additionalGraduateHours.map((additional, index) => (
        <div className="row mb-3 ml-2" key={index}>
          <div className="col-md-3">
            <strong>Area of Study</strong>
          </div>
          <div className="col-md-3">
            <strong></strong>
          </div>
          <div className="col-md-3">
            <strong>Institution</strong>
          </div>
          <div className="col-md-3">
            <strong>Number of Hours</strong>
          </div>
        </div>
      ));
    }

    function ViewPersonRecordCredentialsShowCertificates() {
      return certificates.map((certifcate, index) => (
        <div className="row mb-3 ml-2" key={index}>
          <div className="col-md-3">
            <strong>Certificate</strong>
          </div>
          <div className="col-md-3">
            <strong></strong>
          </div>
          <div className="col-md-3">
            <strong>Institution</strong>
          </div>
          <div className="col-md-3">
            <strong>Number of Hours</strong>
          </div>
        </div>
      ));
    }

    function ViewPersonRecordCredentialsShowCertifications() {
      return certifications.map((certification, index) => (
        <div className="row mb-3 ml-2" key={index}>
          <div className="col-md-3">
            <strong>Certification</strong>
          </div>
          <div className="col-md-3">
            <strong></strong>
          </div>
          <div className="col-md-3">
            <strong>Governing Body</strong>
          </div>
          <div className="col-md-3">
            <strong>Expiration Date</strong>
          </div>
        </div>
      ));
    }

    return (
      <div className="card mb-3 pb-2 border-none border-radius-10 box-shadow">
        <div className="pt-3 pr-3 pb-0 pl-3" id="heading-5">
          <h2
            className="box-subhead pl-0 font24 line-height-1 color-black mw-100 mb-0 cursor-pointer pr-0 collapsed"
            data-toggle="collapse"
            data-target="#collapse-5"
            aria-expanded="false"
            aria-controls="collapse-5"
          >
            Credentials
          </h2>
        </div>
        <div
          id="collapse-5"
          className="collapse p-4"
          aria-labelledby="heading-5"
          data-parent="#accordionTab"
        >
          <div className="row mb-4">
            <div className="col-md-6">
              <strong>Education</strong>
            </div>
          </div>

          <div className="row mb-3 ml-2">
            <div className="col-md-6">
              <strong>Highest Level of Education</strong>
              <br />
              {credentials.educationLevel}
            </div>
          </div>
          <ViewPersonRecordCredentialsShowDegrees />

          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Additional Graduate Hours</strong>
            </div>
          </div>
          <ViewPersonRecordCredentialsShowAdditionalHours />

          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Certifications and Certificates</strong>
            </div>
          </div>
          <ViewPersonRecordCredentialsShowCertificates />
          <ViewPersonRecordCredentialsShowCertifications />
        </div>
      </div>
    );
  }

  return (
    <section className="wrap-best-practices">
      <div className="row row-custom">
        <div className="col-lg-12">
          <ViewPersonRecordSummaryTile />
          <div className="accordion" id="accordionTab">
            <ViewPersonRecordPersonalInformationTile />
            <ViewPersonRecordCommunicationPrefernces />
            <ViewPersonRecordContactInformation />
            <ViewPersonRecordEmergencyContact />
            <ViewPersonRecordCredentialsTile />
          </div>
        </div>
      </div>
    </section>
  );
}
