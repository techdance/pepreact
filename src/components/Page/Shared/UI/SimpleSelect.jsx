import React from "react";

export default function SimpleSelect(props) {
  let {
    selectOptions,
    selectClass,
    onChange,
    selectName,
    initialValue,
    selectId,
  } = props;

  onChange = onChange !== undefined ? onChange : null;
  initialValue = initialValue !== undefined ? initialValue : "";
  selectId = selectId !== undefined ? selectId : "";
  return (
    <select
      className={selectClass}
      name={selectName}
      onChange={onChange}
      value={initialValue}
      id={selectId}
    >
      {selectOptions.map((selectOption, index) => (
        <option
          key={index}
          value={selectOption.value}
          disabled={selectOption.disabled}
          // selected={initialValue === selectOption.value ? true : false}
        >
          {selectOption.label}
        </option>
      ))}
    </select>
  );
}
