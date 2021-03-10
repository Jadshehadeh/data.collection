import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { forgotPassword } from "../auth/index";
import Form from "./form";
import Loading from "./loading";
import FormField from "./formField";

import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function ForgotPassword() {
  const [loading, setLoading] = useState("none");
  const alert = useAlert();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      forgotPassword(values).then((response) => {
        if (response.status === 200) {
          alert.success(response.message);
          resetForm({ values: "" });
          setLoading("none");
        } else {
          alert.error(response.message);
          setLoading("none");
        }
      });
    },
  });

  return (
    <Form
      formTitle="Forgot-Password"
      formIcon={<VpnKeyIcon />}
      buttonTitle="SEND"
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
          <Link to="signIn">Sign-In</Link>
        </Typography>
        <Typography margin="normal">
          <Link to="register">Sign-Up</Link>
        </Typography>
      </div>
      <Loading visible={loading} />
    </Form>
  );
}
