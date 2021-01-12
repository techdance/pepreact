import React, { useReducer, useState } from "react";

export default function TestState() {
  const [parentCount, setParentCount] = useState(0);

  const callBackFunction = (count) => {
    setParentCount(count);
  };

  console.log("Parent Rendered called ");
  return (
    <ChildState parentCount={parentCount} callBackFunction={callBackFunction} />
  );
}

function reducer(state, action) {
  console.log(action);
  return { [action.name]: action.value };
}

function ChildState(props) {
  const { parentCount, callBackFunction } = props;
  const [count, setCount] = useState(0);
  const [field, setField] = useState("Test");

  let fakeObject = {
    field: "Test",
  };

  const [dataObject, setdataObject] = useReducer(reducer, fakeObject);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    let hold = dataObject;
    hold[name] = value;
    // setdataObject({ [name]: value });
    setdataObject({ name: name, value: value });
    // setField(value);
    console.log("handleFieldChange called field " + dataObject.field);
  };

  console.log(
    "Child Rendered called field " +
      dataObject.field +
      " Fake Object " +
      fakeObject.field
  );

  return (
    <div>
      <input
        // className="w-100"
        type="text"
        value={dataObject.field}
        name="field"
        onChange={handleFieldChange}
      />
    </div>
  );
}
