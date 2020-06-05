// libraries
import * as Yup from "yup";
// configurations
// import { auth, handleUserProfile } from "../../firebase/utils";

export const useFormikProps = () => {
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

  const onSubmit = async (values) => {
    console.log(values);
  };
  return { initialValues, validationSchema, onSubmit };
};
