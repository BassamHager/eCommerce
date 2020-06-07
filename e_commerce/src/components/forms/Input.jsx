import React from "react";
// libraries
import { Field, ErrorMessage } from "formik";
// components
import TextError from "./TextError";

const Input = ({
  htmlFor,
  label,
  placeholder,
  fieldClassName,
  divClassName,
}) => {
  return (
    <div className={`formRow ${divClassName}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <Field
        className={`input ${fieldClassName}`}
        type="text"
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
      />
      <ErrorMessage name={htmlFor} component={TextError} />
    </div>
  );
};

export default Input;
