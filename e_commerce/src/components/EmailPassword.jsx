import React from "react";
// libraries
import { Formik, Form } from "formik";
// components
import AuthWrapper from "./AuthWrapper";
import {useFormikProps} from "./forms/FormikProps";
import Input from "./forms/Input";
import Button from "./forms/Button";

const EmailPassword = () => {
  // formik props
  const { initialValues, resetPassword, errMsg } = useFormikProps();

  return (
    <AuthWrapper headline="Email Password">
      <Formik initialValues={initialValues} onSubmit={resetPassword}>
        <Form>
          {errMsg && <p className="error">{errMsg}</p>}

          <Input htmlFor="email" label="E-Mail" placeholder="Your email..." />

          <Button>Email Password</Button>
        </Form>
      </Formik>
    </AuthWrapper>
  );
};

export default EmailPassword;
