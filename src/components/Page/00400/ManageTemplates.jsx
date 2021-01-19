import React, { useState } from "react";

import { getTemplateCourseDevelopment } from "../../../repositories/TemplateRepository";
import { removeFromArray } from "../Shared/usefulFunctions";

const HOST = "http://localhost:3000"; // this needs to be consolidated into one file containing constants (or ENV vars)

export default function ManageTemplates() {
  // get all Templates from DB.
  const [courseDevelopments, setCourseDevelopments] = useState(() => {
    return getTemplateCourseDevelopment();
  });

  function removeTemplate(id) {
    // find the index corresponding to the id
    let currentCourseDevelopments = courseDevelopments;
    let index = 0;
    for (const cd of currentCourseDevelopments) {
      if (cd.id === id) break;
      else ++index;
    }

    let cdState = currentCourseDevelopments[index].state;
    currentCourseDevelopments = removeFromArray(
      currentCourseDevelopments,
      index
    );
    setCourseDevelopments(currentCourseDevelopments);

    // keeping counts in state so that don't have to re-count with each state change.
    switch (cdState) {
      case "Published":
        setNumberPublished(numberPublished - 1);
        break;
      case "Draft":
        setNumberDraft(numberDraft - 1);
        break;
      default:
    }
  }

  // keeping counts in state so that don't have to re-count with each state change.
  const [numberPublished, setNumberPublished] = useState(() => {
    return countType("Published");
  });

  const [numberDraft, setNumberDraft] = useState(() => {
    return countType("Draft");
  });
  function countType(type) {
    let count = 0;
    for (const cd of courseDevelopments) count += cd.state === type ? 1 : 0;

    return count;
  }

  // track which type of template to show in table
  const [currentSelectedState, setcurrentSelectedState] = useState("All");

  function ShowManageTemplatesHeader() {
    const returnRef = (anchor, number, state) => {
      if (anchor)
        return (
          <a href="#0" onClick={() => setcurrentSelectedState(state)}>
            {state}
            <span className="color-black">({number})</span>
          </a>
        );
      else
        return (
          <>
            {state}
            <span className="color-black">({number})</span>
          </>
        );
    };

    let allRef = "";
    let publishedRef = "";
    let draftRef = "";
    switch (currentSelectedState) {
      case "All":
        allRef = returnRef(false, numberPublished + numberDraft, "All");
        publishedRef = returnRef(true, numberPublished, "Published");
        draftRef = returnRef(true, numberDraft, "Draft");
        break;
      case "Published":
        allRef = returnRef(true, numberPublished + numberDraft, "All");
        publishedRef = returnRef(false, numberPublished, "Published");
        draftRef = returnRef(true, numberDraft, "Draft");
        break;
      case "Draft":
        allRef = returnRef(true, numberPublished + numberDraft, "All");
        publishedRef = returnRef(true, numberPublished, "Published");
        draftRef = returnRef(false, numberDraft, "Draft");
        break;
      default:
    }
    return (
      <div className="row row-custom mb-4">
        <div className="col-lg-12">
          <div className="box box-border-radius box-shadow bg-white w-100 position-relative">
            <div className="d-flex justify-content-between font18">
              <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
                Manage Templates
              </h2>

              <div className="mt-2">
                <a
                  href={HOST + "/20IN_00414"}
                  className="btn btn-blue btn-w-100 mb-2"
                >
                  Add Resources
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-between font18">
              <div>
                {allRef}
                <span className="mx-2">|</span> {publishedRef}
                <span className="mx-2">|</span> {draftRef}
              </div>
              <div>
                <div>
                  <a href="#0" className="btn btn-blue btn-w-100">
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ShowManageTemplatesBody() {
    const ShowTemplateBodyLineHTML = ({ courseDevelopment }) => {
      return (
        <tr key={courseDevelopment.id}>
          <td>
            <a href="#0" className="link color-black">
              {courseDevelopment.title}
            </a>
          </td>
          <td>{courseDevelopment.author}</td>
          <td>{courseDevelopment.category}</td>
          <td>{"Published " + courseDevelopment.date}</td>
          <td>
            <a href="#0" onClick={() => removeTemplate(courseDevelopment.id)}>
              <i className="fas fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      );
    };
    const ShowTemplateBodyLine = ({ courseDevelopment }) => {
      switch (currentSelectedState) {
        case "All":
          return (
            <ShowTemplateBodyLineHTML courseDevelopment={courseDevelopment} />
          );

        case "Published":
        case "Draft":
          if (courseDevelopment.state === currentSelectedState) {
            return (
              <ShowTemplateBodyLineHTML courseDevelopment={courseDevelopment} />
            );
          } else return <></>;

        default:
      }
    };

    return (
      <div className="row row-custom mb-4">
        <div className="col-lg-12">
          <div className="box box-border-radius box-shadow bg-white w-100 position-relative">
            <table
              className="table table-custom table-striped table-bordered"
              border="1"
            >
              <caption>Templates</caption>
              <thead>
                <tr>
                  <th className="color-black">Title</th>
                  <th className="color-black">Author</th>
                  <th className="color-black">Category</th>
                  <th className="color-black">Date</th>
                  <th className="color-black">Remove</th>
                </tr>
              </thead>
              <tbody>
                {courseDevelopments.map((courseDevelopment) => (
                  <ShowTemplateBodyLine
                    key={courseDevelopment.id}
                    courseDevelopment={courseDevelopment}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="three-columns">
      <ShowManageTemplatesHeader />
      <ShowManageTemplatesBody />
    </section>
  );
}
