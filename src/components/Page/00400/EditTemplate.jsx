import React, { useReducer } from "react";
import { reducer } from "../Shared/usefulFunctions";

import TemplateForm, { TemplateFormHeader } from "./TemplateForm";

import { getTemplateCourseDevelopmentById } from "../../../repositories/TemplateRepository";

// TODO: Update the author field (not sure what should be added)
// TODO: Upload image and resource files when selected.

export default function EditTemplate() {
  const url = new URL(document.location.href);
  const templateId = url.searchParams.get("templateid");

  const initialTemplate = getTemplateCourseDevelopmentById(templateId);
  const [newTemplate, setNewTemplate] = useReducer(reducer, initialTemplate);

  if (!templateId || !initialTemplate) return null; // Either id doesn't exist in url or in the db

  const handleRemove = () => {
    // delete template from db
  };

  const handleUpdate = () => {
    // udpate template to db
  };

  return (
    <section className="three-columns">
      <TemplateFormHeader headerText="Edit Template" />

      <TemplateForm newTemplate={newTemplate} setNewTemplate={setNewTemplate} />

      <div className="row">
        <div className="col-md-12 text-right">
          <a href="#0" className="btn btn-grey">
            Cancel
          </a>
          <a
            href="#0"
            className="btn btn-grey mx-2"
            name="state"
            onClick={handleRemove}
          >
            Remove
          </a>
          <a
            href="#0"
            className="btn btn-blue"
            name="state"
            onClick={(event) => handleUpdate(event, "Published")}
          >
            Update
          </a>
        </div>
      </div>
    </section>
  );
}
