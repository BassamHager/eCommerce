import React from "react";
import "./SignIn.scss";
// configurations
import { signInWithGoogle } from "../firebase/utils";
// libraries
import { Formik, Form, Field, ErrorMessage } from "formik";
// components
import { useFormikProps } from "./forms/FormikProps";
import TextError from "./forms/TextError";
import Button from "./forms/Button";

const SignIn = () => {
  // formik props
  const { initialValues, submitLogin } = useFormikProps();

  return (
    <div className="signIn">
      <div className="wrap">
        <h2>Login</h2>
      </div>

      <Formik initialValues={initialValues} onSubmit={submitLogin}>
        <Form>
          <div className="formRow">
            <label htmlFor="email">E-Mail</label>
            <Field
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Your email..."
            />
            <ErrorMessage name="email" component={TextError} />
          </div>

          <div className="formRow">
            <label htmlFor="password">Password</label>
            <Field
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Your password..."
            />
            <ErrorMessage name="password" component={TextError} />
          </div>

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
    </div>
  );
};

export default SignIn;
