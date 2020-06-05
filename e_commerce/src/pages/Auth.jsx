import React, { memo } from "react";
import "./Auth.scss";
import SignUp from "../components/SignUp";

function areEqual(prevProps, nextProps) {}

const Auth = () => <SignUp />;

export default memo(Auth, areEqual);
