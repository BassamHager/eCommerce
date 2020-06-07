import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
// configurations
import { signInWithGoogle } from "../firebase/utils";
// libraries
import { Formik, Form } from "formik";
// components
import { useFormikProps } from "./forms/FormikProps";
import Button from "./forms/Button";
import AuthWrapper from "./AuthWrapper";
import Input from "./forms/Input";

const SignIn = () => {
  // formik props
  const { initialValues, submitLogin, errMsg } = useFormikProps();

  return (
    <AuthWrapper headline="Log In">
      <Formik initialValues={initialValues} onSubmit={submitLogin}>
        <Form>
          {errMsg && <p className="error">{errMsg}</p>}

          <Input htmlFor="email" label="E-Mail" placeholder="Your email..." />

          <Input
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="Your password..."
          />

          <Button className="m_bottom">Log In</Button>
        </Form>
      </Formik>

      <div className="formWrap">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="socialSignIn">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </div>
        </form>
      </div>

      <div className="links">
        <Link to="/recovery">Reset Password</Link>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
