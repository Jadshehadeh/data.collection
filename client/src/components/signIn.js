import React, { useState } from "react";
import { signIn, authenticate } from "../auth/index";

import Form from "./form";
import FormField from "./formField";
import Loading from "./loading";

import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAlert } from "react-alert";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function SignIn({ history }) {
  const [loading, setLoading] = useState("none");

  const alert = useAlert();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      signIn(values).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading("none");
          alert.success(response.message);
          authenticate(response.account);
          history.push("/");
        } else {
          setLoading("none");
          alert.error(response.message);
        }
      });
    },
  });

  return (
    <Form
      formTitle="Login"
      formIcon={<LockIcon />}
      buttonTitle="Login"
      onSubmit={formik.handleSubmit}
    >
      <FormField
        variant="outlined"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        textIcon={<AlternateEmailIcon />}
      />
      <FormField
        fullWidth
        variant="outlined"
        id="password"
        margin="normal"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        textIcon={<LockIcon />}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          marginTop: 5,
          marginRight: 5,
          marginLeft: 5,
        }}
      >
        <Typography margin="normal">
          <Link to="forgot-password">Forgot Password!</Link>
        </Typography>
        <Typography margin="normal">
          <Link to="register">Sign Up</Link>
        </Typography>
      </div>
      <Loading visible={loading} />
    </Form>
  );
}
