import { useState } from "react";
import { useHistory } from "react-router-dom";
// libraries
import * as Yup from "yup";
// configurations
import { auth, handleUserProfile } from "../../firebase/utils";

export const useFormikProps = () => {
  const [errMsg, setErrMsg] = useState("");

  const initialValues = {
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  };

  const validationSchema = Yup.object({
    displayName: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required!"),
  });

  const submitRegister = async ({ displayName, email, password }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      handleUserProfile(user, { displayName });
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
    }
  };

  const submitLogin = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
    }
  };

  const history = useHistory();
  const resetPassword = async ({ email }) => {
    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth.sendPasswordResetEmail(email, config);
      await console.log("password reset");
      history.push("/login");
    } catch (error) {
      setErrMsg(error.message);
      console.log(error);
      console.log("error!");
    }
  };

  return {
    initialValues,
    validationSchema,
    submitRegister,
    submitLogin,
    errMsg,
    resetPassword,
  };
};
