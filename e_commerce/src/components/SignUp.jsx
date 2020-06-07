import React from "react";
import "./SignUp.scss";
// libraries
import { Formik, Form } from "formik";
// components
import { useFormikProps } from "./forms/FormikProps";
import Button from "./forms/Button";
import AuthWrapper from "./AuthWrapper";
import Input from "./forms/Input";

const SignUp = () => {
  // formik props
  const {
    initialValues,
    validationSchema,
    submitRegister,
    errMsg,
  } = useFormikProps();

  return (
    <AuthWrapper headline="Sign Up">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitRegister}
      >
        <Form>
          {errMsg && <p className="error">{errMsg}</p>}

          <Input
            htmlFor="displayName"
            label="Name"
            placeholder="Your name..."
          />

          <Input htmlFor="email" label="E-Mail" placeholder="Your email..." />

          <Input
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="Your password..."
          />

          <Input
            htmlFor="confirmedPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password..."
          />

          <Button>Register</Button>
        </Form>
      </Formik>
    </AuthWrapper>
  );
};

export default SignUp;
