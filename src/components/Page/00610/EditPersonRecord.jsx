import React, { useReducer } from "react";

import { reducer, nestedReducer } from "../Shared/usefulFunctions";
import SimpleSelect from "../Shared/UI/SimpleSelect";

import { getPersonRecordByID } from "../../../repositories/PersonRecordRepository";

// data objects for select statements
import {
  role,
  position,
  campus,
  department,
  suffix,
  gender,
  maritalStatus,
  citizenship,
  nationality,
  ethnic,
  race,
  militaryBranch,
  accommodation,
  graduationYears,
} from "../../../data/miscSelects";
import { prefixList } from "../../../data/prefixList";
import { languageList } from "../../../data/languages";
import { disciplineList } from "../../../data/disciplines";

function PersonRecordForm({ personRecord, setPersonRecord }) {
  const [personalInformation, setPersonalInformation] = useReducer(
    reducer,
    personRecord.personalInformation
  );
  const [communicationPreferences, setCommunicationPreferences] = useReducer(
    reducer,
    personRecord.communicationPreferences
  );
  //   contactInformation has child objects so use nestedReducer
  const [contactInformation, setContactInformation] = useReducer(
    nestedReducer,
    personRecord.contactInformation
  );
  const [primaryAddress, setPrimaryAddress] = useReducer(
    reducer,
    contactInformation.primary
  );
  const [secondaryAddress, setSecondaryAddress] = useReducer(
    reducer,
    contactInformation.secondary
  );
  //   emergencyContacts has child objects so use nestedReducer
  const [emergencyContacts, setEmergencyContacts] = useReducer(
    nestedReducer,
    personRecord.emergencyContacts
  );
  const [emergencyPrimaryAddress, setemergencyPrimaryAddress] = useReducer(
    reducer,
    emergencyContacts.primary
  );
  const [emergencySecondaryAddress, setemergencySecondaryAddress] = useReducer(
    reducer,
    emergencyContacts.secondary
  );

  let { credentials } = personRecord;
  let {
    degrees,
    additionalGraduateHours,
    certificates,
    certifications,
  } = credentials;

  function personRecordFormSummaryTile() {
    return (
      <div
        className="box box-border-radius box-shadow bg-white height-auto mb-3"
        onChange={({ target: { name, value } }) => {
          // update both state and parent
          const childObjectName = "personalInformation";
          setPersonalInformation({ name, value });
          setPersonRecord({ name, value, childObjectName });
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <img
              src={"images/" + personalInformation.image}
              alt={personalInformation.name}
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group mb-2">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={personalInformation.name}
                    className="input"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group mb-2">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name=""
                    value="123456789001"
                    className="input"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group">
                  <label>Role</label>

                  <SimpleSelect
                    selectOptions={role}
                    selectClass="input select"
                    selectName="role"
                    initialValue={personalInformation.role}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group mb-2">
                  <label>Position</label>
                  <SimpleSelect
                    selectOptions={position}
                    selectClass="input select"
                    selectName="title"
                    initialValue={personalInformation.title}
                  />
                </div>
              </div>
              <div className="col-md-4 mb-2 color-black"></div>
              <div className="col-md-4 mb-2 color-black"></div>
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group mb-2">
                  <label>Campus</label>
                  {/* Not clear where Campus comes from - is it part of institution or person? */}
                  <input
                    type="text"
                    name=""
                    value="Iowa Campus"
                    className="input"
                    readOnly
                  />
                  {/* <SimpleSelect
                    selectOptions={campus}
                    selectClass="input select"
                    selectName="title"
                    initialValue={personalInformation.title}
                  /> */}
                </div>
              </div>
              <div className="col-md-4 mb-2 color-black"></div>
              <div className="col-md-4 mb-2 color-black">
                <div className="form-group mb-2">
                  <label>Department</label>
                  <SimpleSelect
                    selectOptions={department}
                    selectClass="input select"
                    selectName="department"
                    initialValue={personalInformation.department}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function personRecordFormPersonalInformationTile() {
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
          onChange={({ target: { name, value } }) => {
            // update both state and let parent
            const childObjectName = "personalInformation";
            setPersonalInformation({ name, value });
            setPersonRecord({ name, value, childObjectName });
          }}
        >
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Prefix</label>
                <SimpleSelect
                  selectOptions={prefixList}
                  selectClass="input select"
                  selectName="namePrefix"
                  initialValue={personalInformation.namePrefix}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={personalInformation.firstName}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={personalInformation.middleName}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={personalInformation.lastName}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Suffix</label>
                <SimpleSelect
                  selectOptions={suffix}
                  selectClass="input select"
                  selectName="suffix"
                  initialValue={personalInformation.suffix}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Preferred Name</label>
                <input
                  type="text"
                  name="preferredName"
                  value={personalInformation.perferredName}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Position</label>
                <input
                  type="text"
                  name="title"
                  value={personalInformation.title}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Maiden Name</label>
                <input
                  type="text"
                  name="maidenName"
                  value={personalInformation.maidenName}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={personalInformation.age}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Alternative ID Number</label>
                <input
                  type="text"
                  name="alternateId"
                  value={personalInformation.alternateId}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Social Security</label>
                <input
                  type="text"
                  name="ssn"
                  value={personalInformation.ssn}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Alien ID Number</label>
                <input
                  type="number"
                  name="alienId"
                  value={personalInformation.alienId}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Birth Date</label>
                <input
                  type="text"
                  name="birthDate"
                  value={personalInformation.birthDate}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Gender</label>
                <SimpleSelect
                  selectOptions={gender}
                  selectClass="input select"
                  selectName="gender"
                  initialValue={personalInformation.gender}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Marital Status</label>
                <SimpleSelect
                  selectOptions={maritalStatus}
                  selectClass="input select"
                  selectName="maritalStatus"
                  initialValue={personalInformation.maritalStatus}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Citizenship</label>
                <SimpleSelect
                  selectOptions={citizenship}
                  selectClass="input select"
                  selectName="citizenship"
                  initialValue={personalInformation.citizenship}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Nationality</label>
                <SimpleSelect
                  selectOptions={nationality}
                  selectClass="input select"
                  selectName="nationality"
                  initialValue={personalInformation.nationality}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Ethnicity 1</label>
                <SimpleSelect
                  selectOptions={ethnic}
                  selectClass="input select"
                  selectName="ethnicity1"
                  initialValue={personalInformation.ethnicity1}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Ethnicity 2</label>
                <SimpleSelect
                  selectOptions={ethnic}
                  selectClass="input select"
                  selectName="ethnicity2"
                  initialValue={personalInformation.ethnicity2}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Race 1</label>
                <SimpleSelect
                  selectOptions={race}
                  selectClass="input select"
                  selectName="race1"
                  initialValue={personalInformation.race1}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Race 2</label>
                <SimpleSelect
                  selectOptions={race}
                  selectClass="input select"
                  selectName="race2"
                  initialValue={personalInformation.race2}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Veteran Status</label>
                <SimpleSelect
                  selectOptions={[
                    { name: "No", label: "No", disabled: "" },
                    { name: "Yes", label: "Yes", disabled: "" },
                  ]}
                  selectClass="input select"
                  selectName="veteranStatus"
                  initialValue={personalInformation.veteranStatus}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Military Branch</label>
                <SimpleSelect
                  selectOptions={militaryBranch}
                  selectClass="input select"
                  selectName="militaryBranch"
                  initialValue={personalInformation.militaryBranch}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Disability </label>
                <SimpleSelect
                  selectOptions={[
                    { name: "No", label: "No", disabled: "" },
                    { name: "Yes", label: "Yes", disabled: "" },
                  ]}
                  selectClass="input select"
                  selectName="disability"
                  initialValue={personalInformation.disability}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Accommodation</label>
                <SimpleSelect
                  selectOptions={accommodation}
                  selectClass="input select"
                  selectName="accommodation"
                  initialValue={personalInformation.accommodation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function personRecordFormCommunicationPreferencesTile() {
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
          onChange={({ target: { name, value } }) => {
            // update both state and parent
            const childObjectName = "communicationPreferences";
            setCommunicationPreferences({ name, value });
            setPersonRecord({ name, value, childObjectName });
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <strong>Language</strong>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Primary</label>
                <SimpleSelect
                  selectOptions={languageList}
                  selectClass="input select"
                  selectName="primaryLanguage"
                  initialValue={communicationPreferences.primaryLanguage}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Secondary</label>
                <SimpleSelect
                  selectOptions={languageList}
                  selectClass="input select"
                  selectName="secondaryLanguage"
                  initialValue={communicationPreferences.secondaryLanguage}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Tertiary</label>
                <SimpleSelect
                  selectOptions={languageList}
                  selectClass="input select"
                  selectName="tertiaryLanguage"
                  initialValue={communicationPreferences.tertiaryLanguage}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <strong>Channels</strong>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Office Email</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={communicationPreferences.emailAddress}
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Office Phone</label>
                <div className="d-flex">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={communicationPreferences.phoneNumber}
                    className="input"
                  />
                  {/* <input type="text" name="" value="" className="input" /> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Website</label>
                <input
                  type="text"
                  name="url"
                  value={communicationPreferences.url}
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function personRecordFormContactInfoTile() {
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
          onChange={({ target: { name, value, id } }) => {
            //   set primary or secondary address state, then parent state objects
            if (id === "primary") setPrimaryAddress({ name, value });
            else setSecondaryAddress({ name, value });

            let childObjectName = id;
            setContactInformation({ name, value, childObjectName });

            value = id === "primary" ? primaryAddress : secondaryAddress;
            name = id;
            childObjectName = "contactInformation";
            setPersonRecord({ name, value, childObjectName });
          }}
        >
          <div className="row position-relative">
            <div className="col-md-8">
              <div>
                <strong>Primary</strong>
              </div>

              <div className="form-group mb-2">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={primaryAddress.streetAddress}
                  className="input"
                  id="primary"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: "1000",
                top: "0px",
                right: "15px",
              }}
            >
              *Preferred
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={primaryAddress.city}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>State or Province</label>
                <input
                  type="text"
                  name="state"
                  value={primaryAddress.state}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={primaryAddress.postalCode}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>County</label>
                <input
                  type="text"
                  name="county"
                  value={primaryAddress.county}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={primaryAddress.country}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Mail Name</label>
                <input
                  type="text"
                  name="mailName"
                  value={primaryAddress.mailName}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-md-8">
              <div>
                <strong>Secondary</strong>
              </div>

              <div className="form-group mb-2">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={secondaryAddress.streetAddress}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: "1000",
                top: "0px",
                right: "15px",
              }}
            >
              *Preferred
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={secondaryAddress.city}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>State or Province</label>
                <input
                  type="text"
                  name="state"
                  value={secondaryAddress.state}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={secondaryAddress.postalCode}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>County</label>
                <input
                  type="text"
                  name="county"
                  value={secondaryAddress.county}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={secondaryAddress.country}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group mb-2">
                <label>Mail Name</label>
                <input
                  type="text"
                  name="mailName"
                  value={secondaryAddress.mailName}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Primary Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={primaryAddress.phoneNumber}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="phoneNumberType"
                  value={primaryAddress.phoneNumberType}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Secondary Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={secondaryAddress.phoneNumber}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="phoneNumberType"
                  value={secondaryAddress.phoneNumberType}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Primary Email</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={primaryAddress.emailAddress}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="emailAddressType"
                  value={primaryAddress.emailAddressType}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Secondary Email</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={secondaryAddress.emailAddress}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="emailAddressType"
                  value={secondaryAddress.emailAddressType}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function personRecordFormEmergencyContactsTile() {
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
          onChange={({ target: { name, value, id } }) => {
            //   set primary or secondary address state, then parent state objects
            if (id === "primary") setemergencyPrimaryAddress({ name, value });
            else setemergencySecondaryAddress({ name, value });

            let childObjectName = id;
            setEmergencyContacts({ name, value, childObjectName });

            value =
              id === "primary"
                ? emergencyPrimaryAddress
                : emergencySecondaryAddress;
            name = id;
            childObjectName = "emergencyContacts";
            setPersonRecord({ name, value, childObjectName });
          }}
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={emergencyPrimaryAddress.name}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Relationship</label>
                <input
                  type="text"
                  name="relationship"
                  value={emergencyPrimaryAddress.relationship}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={emergencyPrimaryAddress.streetAddress}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={emergencyPrimaryAddress.city}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>State or Province</label>
                <input
                  type="text"
                  name="state"
                  value={emergencyPrimaryAddress.state}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={emergencyPrimaryAddress.postalCode}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>County</label>
                <input
                  type="text"
                  name="county"
                  value={emergencyPrimaryAddress.county}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={emergencyPrimaryAddress.country}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={emergencyPrimaryAddress.phoneNumber}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="phoneNumberType"
                  value={emergencyPrimaryAddress.phoneNumberType}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Email</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={emergencyPrimaryAddress.emailAddress}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="emailAddressType"
                  value={emergencyPrimaryAddress.emailAddressType}
                  id="primary"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={emergencySecondaryAddress.name}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Relationship</label>
                <input
                  type="text"
                  name="relationship"
                  value={emergencySecondaryAddress.relationship}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={emergencySecondaryAddress.streetAddress}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={emergencySecondaryAddress.city}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>State or Province</label>
                <input
                  type="text"
                  name="state"
                  value={emergencySecondaryAddress.state}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={emergencySecondaryAddress.postalCode}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>County</label>
                <input
                  type="text"
                  name="county"
                  value={emergencySecondaryAddress.county}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={emergencySecondaryAddress.country}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={emergencySecondaryAddress.phoneNumber}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="phoneNumberType"
                  value={emergencySecondaryAddress.phoneNumberType}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Email</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={emergencySecondaryAddress.emailAddress}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-2">
                <label>Type</label>
                <input
                  type="text"
                  name="emailAddressType"
                  value={emergencySecondaryAddress.emailAddressType}
                  id="secondary"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function personRecordFormCredentialsTile() {
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
          <div className="row mb-2">
            <div className="col-md-6">
              <strong>Education⁠</strong>
            </div>
          </div>

          <div
            className="row mb-3"
            onChange={({ target: { name, value } }) => {
              const childObjectName = "credentials";
              setPersonRecord({ name, value, childObjectName });
            }}
          >
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Highest Level of Education</label>
                <SimpleSelect
                  selectOptions={[
                    { name: "High School", label: "High School" },
                    { name: "GED", label: "GED" },
                    { name: "Associate", label: "Associate" },
                    { name: "Bachelor's", label: "Bachelor's" },
                    { name: "Master's", label: "Master's" },
                    { name: "Doctorate", label: "Doctorate" },
                    { name: "Post-Doctorate", label: "Post-Doctorate" },
                  ]}
                  selectClass="input select"
                  selectName="educationLevel"
                  initialValue={credentials.educationLevel}
                />
              </div>
            </div>
          </div>
          <div
            onChange={({ target: { name, value, id } }) => {
              degrees[id][name] = value;
              value = degrees;
              name = "degrees";
              const childObjectName = "credentials";
              setPersonRecord({ name, value, childObjectName });
            }}
          >
            {degrees.map((degree, index) => (
              <div key={index} className="row mb-3">
                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Degree</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "High School", label: "High School" },
                        { name: "GED", label: "GED" },
                        { name: "Associate", label: "Associate" },
                        { name: "Bachelor's", label: "Bachelor's" },
                        { name: "Master's", label: "Master's" },
                        { name: "Doctorate", label: "Doctorate" },
                        { name: "Post-Doctorate", label: "Post-Doctorate" },
                      ]}
                      selectClass="input select"
                      selectName="name"
                      initialValue={degree.name}
                      selectId={index}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Discipline</label>
                    <SimpleSelect
                      selectOptions={disciplineList}
                      selectClass="input select"
                      selectName="discipline"
                      initialValue={degree.discipline}
                      selectId={index}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Institution</label>
                    <SimpleSelect
                      selectOptions={[
                        {
                          name: "Grove City College",
                          label: "Grove City College",
                          disabled: "",
                        },
                      ]}
                      selectClass="input select"
                      selectName="institution"
                      initialValue={degree.institution}
                      selectId={index}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Graduation Year</label>
                    <SimpleSelect
                      selectOptions={graduationYears}
                      selectClass="input select"
                      selectName="graduationYear"
                      initialValue={degree.graduationYear}
                      selectId={index}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Additional Graduate Hours</strong>
            </div>
          </div>
          <div
            onChange={({ target: { name, value, id } }) => {
              additionalGraduateHours[id][name] = value;
              value = additionalGraduateHours;
              name = "additionalGraduateHours";
              const childObjectName = "credentials";
              setPersonRecord({ name, value, childObjectName });
            }}
          >
            {additionalGraduateHours.map((additionalHours, index) => (
              <div className="row mb-3" key={index}>
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <label>Area of Study</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="areaOfStudy"
                      initialValue={additionalHours.areaOfStudy}
                      selectId={index}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Institution</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="institution"
                      initialValue={additionalHours.institution}
                      selectId={index}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Graduation Year</label>
                    <SimpleSelect
                      selectOptions={graduationYears}
                      selectClass="input select"
                      selectName="numberOfHours"
                      initialValue={additionalHours.numberOfHours}
                      selectId={index}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Certificates and Certifications</strong>
            </div>
          </div>
          <div
            onChange={({ target: { name, value, id } }) => {
              certificates[id][name] = value;
              value = certificates;
              name = "certificates";
              const childObjectName = "credentials";
              setPersonRecord({ name, value, childObjectName });
            }}
          >
            {certificates.map((certificate, index) => (
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <label>Certificate</label>

                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="name"
                      initialValue={certificate.name}
                      selectId={index}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Institution</label>

                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="institution"
                      initialValue={certificate.institution}
                      selectId={index}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Graduation Year</label>
                    <SimpleSelect
                      selectOptions={graduationYears}
                      selectClass="input select"
                      selectName="numberOfHours"
                      initialValue={certificate.numberOfHours}
                      selectId={index}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            onChange={({ target: { name, value, id } }) => {
              certificates[id][name] = value;
              value = certifications;
              name = "certificaitons";
              const childObjectName = "credentials";
              setPersonRecord({ name, value, childObjectName });
            }}
          >
            {certifications.map((certification, index) => (
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <label>Certificate</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="name"
                      initialValue={certification.name}
                      selectId={index}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Governing Body</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="governingBody"
                      initialValue={certification.governingBody}
                      selectId={index}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-2">
                    <label>Expiration Date</label>
                    <SimpleSelect
                      selectOptions={[
                        { name: "Please Select", label: "Please Select" },
                      ]}
                      selectClass="input select"
                      selectName="numberOfHours"
                      initialValue={certification.numberOfHours}
                      selectId={index}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-12">
      {personRecordFormSummaryTile()}
      <div className="accordion" id="accordionTab">
        {personRecordFormPersonalInformationTile()}
        {personRecordFormCommunicationPreferencesTile()}
        {personRecordFormContactInfoTile()}
        {personRecordFormEmergencyContactsTile()}
        {personRecordFormCredentialsTile()}
      </div>
    </div>
  );
}

export default function EditPersonRecord() {
  const url = new URL(document.location.href);
  const personRecordId = url.searchParams.get("personrecordid");
  const initialPersonRecord = getPersonRecordByID(personRecordId);

  const [personRecord, setPersonRecord] = useReducer(
    nestedReducer,
    initialPersonRecord
  );

  if (!personRecordId || !initialPersonRecord) return null; // either no parameter or db record not found;

  return (
    <section className="wrap-best-practices">
      <div className="row row-custom">
        <PersonRecordForm
          personRecord={personRecord}
          setPersonRecord={setPersonRecord}
        />{" "}
      </div>
    </section>
  );
}
