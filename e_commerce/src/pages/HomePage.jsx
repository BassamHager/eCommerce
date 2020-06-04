import React, { memo } from "react";
import "./HomePage.scss";
// components
import Directory from "../components/Directory";

function areEqual(prevProps, nextProps) {}

const HomePage = () => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};

export default memo(HomePage, areEqual);
