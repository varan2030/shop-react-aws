import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function(event) {
      console.log(event.target)
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}

export function useSelectFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.name]: event.target.value
      });
    }
  ];
}