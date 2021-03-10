import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import { useFormik } from "formik";
import * as yup from "yup";

import Form from "./form";
import Loading from "./loading";
import FormField from "./formField";
import { resetPassword } from "../auth/index";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

export default function ResetPassword({ history }) {
  const [loading, setLoading] = useState("none");
  const alert = useAlert();

  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const token = query.get("token");

  const formik = useFormik({
    initialValues: {
      token: token,
      password: "",
      confirmPassword: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      resetPassword(values).then((response) => {
        if (response.status === 200) {
          alert.success(response.message);
          history.push("/signIn");
          setLoading("none");
        } else {
          setLoading("none");
          alert.error(response.message);
        }
      });
    },
  });

  return (
    <Form
      formTitle="Reset-Password"
      formIcon={<LockOpenIcon />}
      buttonTitle="RESET"
      onSubmit={formik.handleSubmit}
    >
      <FormField
        variant="outlined"
        id="password"
        name="password"
        label="New Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        textIcon={<LockIcon />}
      />
      <FormField
        variant="outlined"
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        textIcon={<LockIcon />}
      />
      <Loading visible={loading} />
    </Form>
  );
}
