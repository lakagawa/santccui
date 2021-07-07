import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

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
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest}></ReactInputMask>
  );
};
