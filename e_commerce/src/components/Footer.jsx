import React, { memo } from "react";
import "./Footer.scss";

function areEqual(prevProps, nextProps) {}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap center bg">copy right logo</div>
    </footer>
  );
};

export default memo(Footer, areEqual);
