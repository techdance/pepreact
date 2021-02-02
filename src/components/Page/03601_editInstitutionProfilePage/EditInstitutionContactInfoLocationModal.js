import React, { useReducer } from "react";

function reducer(prevState, { name, value }) {
  return { ...prevState, [name]: value };
}

export default function EditInstitutionContactInfoLocationModal(props) {
  const { location, index, title, onChange, onDelete } = props;

  // update the local version of location object.
  //  local version is passed back to parent if Update button is clicked.
  const [campus, setCampus] = useReducer(reducer, location);

  const handleFieldChange = function (event) {
    const { name, value } = event.target;
    setCampus({ name, value });
  };

  const handleChkBoxToggle = function (event) {
    const { name } = event.target;
    let value = campus.mainCampus ? false : true; // toggle value of check box "name"
    setCampus({ name, value });
  };

  return (
    <div
      className="modal fade modalToltip modalareainterest"
      id={"modalEditCampus" + index}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header position-relative text-center">
            <div className="text-left font15 m-auto">
              <strong>{title}</strong>
            </div>
            <div className="toltip-close3">
              <a href="#0" data-dismiss="modal">
                <i className="fa fa-times-circle"></i>
              </a>
            </div>
          </div>
          <div className="modal-body">
            <div className="interest-modal color-white">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3 d-flex">
                    <label>Main Campus</label>
                    <div className="ml-2">
                      <input
                        type="checkbox"
                        // check to make sure mainCampus field exists first for backward compatibility
                        checked={
                          campus.mainCampus !== undefined
                            ? campus.mainCampus
                            : false
                        }
                        name="mainCampus"
                        onChange={handleChkBoxToggle}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Campus Name</label>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        value={campus.name}
                        name="name"
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Institution Name</label>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        value={campus.institution}
                        name="institution"
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Address 1</label>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        value={campus.address1}
                        name="address1"
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Address 2</label>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        value={campus.address2}
                        name="address2"
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-md-7">
                        <label className="d-block">City</label>
                        <input
                          className="w-100"
                          type="text"
                          value={campus.city}
                          name="city"
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div className="col-md-2">
                        <label className="d-block">State</label>
                        <input
                          className="w-100"
                          type="text"
                          value={campus.state}
                          name="state"
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="d-block">Postal Code</label>
                        <input
                          className="w-100"
                          type="text"
                          value={campus.zipcode}
                          name="zipcode"
                          onChange={handleFieldChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Region</label>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        value={campus.continent}
                        name="continent"
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="d-block">Country</label>
                    <div>
                      <select
                        className="input select"
                        name="country"
                        onChange={handleFieldChange}
                      >
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-right">
                  <a
                    href="#0"
                    className="btn btn-grey mr-2"
                    data-dismiss="modal"
                    // reset state to be original location
                    onClick={() => {
                      for (const name in campus) {
                        const value = location[name];
                        setCampus({ name, value });
                      }
                    }}
                  >
                    Cancel
                  </a>
                  <a
                    href="#0"
                    className="btn btn-grey mr-2"
                    data-dismiss="modal"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </a>
                  <a
                    href="#0"
                    className="btn btn-blue"
                    data-dismiss="modal"
                    onClick={(event) => onChange(campus, index, event)} // update location in parent to current state
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
