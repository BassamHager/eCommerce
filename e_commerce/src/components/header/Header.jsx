import React from "react";
import "./styles.scss";

import Logo from "../../assets/BisoLogo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Biso Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
