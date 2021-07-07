import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Checkbox } from "react-materialize";

export default ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  console.log(inputRef.current);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
      <Checkbox ref={inputRef} defaultValue={defaultValue} {...rest}></Checkbox>
  );
};
