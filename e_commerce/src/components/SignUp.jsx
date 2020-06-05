import React from "react";
import "./SignUp.scss";
// libraries
import { Formik, Form, Field, ErrorMessage } from "formik";
// components
import { useFormikProps } from "./forms/FormikProps";
import TextError from "./forms/TextError";
import Button from "./forms/Button";

const SignUp = () => {
  // formik props
  const { initialValues, validationSchema, onSubmit } = useFormikProps();

  return (
    <div className="signup">
      <div className="wrap">
        <h2>Sign Up</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="formRow">
              <label htmlFor="displayName">Name</label>
              <Field
                className="input"
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Your name..."
              />
              <ErrorMessage name="displayName" component={TextError} />
            </div>

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

            <div className="formRow">
              <label htmlFor="confirmedPassword">Confirm Password</label>
              <Field
                className="input"
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                placeholder="Confirm your password..."
              />
              <ErrorMessage name="confirmedPassword" component={TextError} />
            </div>

            <Button>Register</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
