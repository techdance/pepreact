import React, { useReducer } from "react";
import { reducer } from "../Shared/usefulFunctions";

import TemplateForm, { TemplateFormHeader } from "./TemplateForm";

import Template from "../../../classes/Template";

// TODO: Update the author field (not sure what should be added)
// TODO: Upload image and resource files when selected.

export default function NewTemplate() {
  const [newTemplate, setNewTemplate] = useReducer(reducer, new Template());

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
      <TemplateFormHeader headerText="New Template" />

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
            onClick={(event) => handleSave(event, "Draft")}
          >
            "Save Draft"
          </a>
          <a
            href="#0"
            className="btn btn-blue"
            name="state"
            onClick={(event) => handleSave(event, "Published")}
          >
            "Publish"
          </a>
        </div>
      </div>
    </section>
  );
}
