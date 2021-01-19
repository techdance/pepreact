import React, { useReducer, useRef } from "react";
import { reducer } from "../Shared/usefulFunctions";

import Template from "../../../classes/Template";

// TODO: Update the author field (not sure what should be added)
// TODO: Upload image and resource files when selected.

export default function NewTemplate() {
  const [newTemplate, setNewTemplate] = useReducer(reducer, new Template());
  const imageUploadButton = useRef(null);
  function handleImageUploadClick() {
    imageUploadButton.current.click();
  }
  const resourceFileUploadButton = useRef(null);
  function handleResourceFileClick() {
    resourceFileUploadButton.current.click();
  }

  const handleSave = ({ target: { name } }, value) => {
    console.log(value);
    setNewTemplate({ name, value });

    // update the date in the record;
    const today = new Date();
    name = "date";
    value =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setNewTemplate({ name, value });
  };

  return (
    <section className="three-columns">
      <div className="row row-custom mb-4">
        <div className="col-lg-12">
          <div className="box box-border-radius box-shadow bg-white w-100 position-relative">
            <div className="d-flex justify-content-between font18">
              <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
                New Templates
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row row-custom mb-4"
        onChange={({ target: { name, value, files } }) => {
          switch (name) {
            case "coverImage":
            case "resourceFile":
              value = files[0].name;
              const file = files[0]; // Do something with this because it is the file that needs to be upload to server
              setNewTemplate({ name, value });
              break;
            default:
              setNewTemplate({ name, value });
          }
        }}
      >
        <div className="col-lg-6">
          <div className="box box-border-radius box-shadow bg-white w-100 position-relative">
            <div className="row align-items-center mt-2">
              <div className="col-md-4">
                <div className="form-group mb-2">
                  <label>Title</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group mb-2">
                  <input
                    type="text"
                    name="title"
                    defaultValue={newTemplate.title}
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="form-group mb-2">
                  <label>Description</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group mb-2">
                  <textarea
                    type="text"
                    rows="7"
                    className="input"
                    name="description"
                    defaultValue={newTemplate.description}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="form-group mb-2">
                  <label>Category</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group mb-2">
                  <select
                    className="input"
                    name="category"
                    defaultValue={newTemplate.category}
                  >
                    {/* <option>Add New Category</option> */}
                    <option></option>
                    <option>Course</option>
                    <option>Syllabus</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="form-group mb-2">
                  <label>Featured Image</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group mb-2 w-100 d-flex">
                  <input
                    type="text"
                    name=""
                    defaultValue={newTemplate.coverImage}
                    className="input mr-2 col-8"
                    readOnly
                  />
                  <a
                    href="#0"
                    className="btn btn-blue col-5"
                    onClick={handleImageUploadClick}
                  >
                    Upload
                  </a>
                  <input
                    type="file"
                    ref={imageUploadButton}
                    name="coverImage"
                    accept="image/png, image/jpeg"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="form-group mb-2 img-resp">
                  {newTemplate.coverImage ? (
                    <img
                      src={"images/" + newTemplate.coverImage}
                      alt="New Template Featured"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box box-border-radius box-shadow bg-white w-100 position-relative">
            <div className="row align-items-center mt-2">
              <div className="col-md-4">
                <div className="form-group mb-2">
                  <label>Resource File</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group mb-2 w-100 d-flex">
                  <input
                    type="text"
                    name=""
                    defaultValue={newTemplate.resourceFile}
                    readOnly
                    className="input mr-2 col-8"
                  />
                  <a
                    href="#0"
                    className="btn btn-blue col-5"
                    onClick={handleResourceFileClick}
                  >
                    Upload
                  </a>
                  <input
                    type="file"
                    name="resourceFile"
                    accept=".pdf"
                    ref={resourceFileUploadButton}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div
                  className="w-100 d-flex align-items-center justify-content-between"
                  style={{
                    background: "#ececec",
                    height: "400px",
                    textAlign: "center",
                  }}
                >
                  <button className="btn btn-blue m-auto">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-right">
          <a href="#0" className="btn btn-grey">
            Cancel
          </a>
          <a
            href="#0"
            className="btn btn-grey mx-2"
            name="state"
            onClick={(event) => handleSave(event, "Draft")}
          >
            Save Draft
          </a>
          <a
            href="#0"
            className="btn btn-blue"
            name="state"
            onClick={(event) => handleSave(event, "Published")}
          >
            Publish
          </a>
        </div>
      </div>
    </section>
  );
}
