import React from "react";
import "./Directory.scss";
// images
import Male from "../assets/menFashion.jpg";
import Female from "../assets/womenFashion.jpg";

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${Female})` }}>
          <a href="#bla">Shop Womens</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Male})` }}>
          <a href="#bla">Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
