import React, { memo } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// configurations
import { auth } from "../firebase/utils";
// components
// import Button from "./forms/Button";
// assets
import Logo from "../assets/BisoLogo.jpeg";

function areEqual(prevProps, nextProps) {}

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Biso Logo" />
          </Link>
        </div>

        <div className="callToActions">
          {!currentUser ? (
            <ul>
              <li>
                <Link to="/auth">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>Log Out</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default memo(Header, areEqual);
