import React from "react";
import "./Button.scss";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
