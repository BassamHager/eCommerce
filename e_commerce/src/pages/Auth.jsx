import React, { memo } from "react";
import "./Auth.scss";

function areEqual(prevProps, nextProps) {}

const Auth = () => {
  return (
    <div className="auth">
      <h1>Auth</h1>
    </div>
  );
};

export default memo(Auth, areEqual);
