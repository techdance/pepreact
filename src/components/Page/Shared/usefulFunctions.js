export const removeFromArray = function (targetArray, index) {
  // take care of edges where index is first or last element
  switch (index + 1) {
    case 1:
      targetArray.shift(); // removes first element
      break;
    case targetArray.length:
      targetArray.pop(); // removes last element
      break;
    default:
      let newArray = [];
      newArray = targetArray.slice(0, index); // up to but not including indexed module
      targetArray = newArray.concat(targetArray.slice(index + 1)); // everything after indexed module
  }

  return targetArray;
};

export function reducer(prevState, { name, value }) {
  return { ...prevState, [name]: value };
}

export function arrayReducer(prevState, { name, value, id }) {
  return { ...prevState, [id]: { ...prevState[id], [name]: value } };
}

export function nestedReducer(prevState, { name, value, childObjectName }) {
  return {
    ...prevState,
    [childObjectName]: { ...prevState[childObjectName], [name]: value },
  };
}
