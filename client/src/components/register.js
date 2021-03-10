import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

import { createAccount } from "../auth/index";
import Form from "./form";
import Loading from "./loading";
import FormField from "./formField";

import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LockIcon from "@material-ui/icons/Lock";

export default function Register() {
  const [loading, setLoading] = useState("none");

  const alert = useAlert();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your FirstName")
      .required("FirstName is required"),
    lastName: yup
      .string("Enter your LastName")
      .required("LastName is required"),
    phoneNumber: yup
      .string("Enter your Phone Number")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      createAccount(values).then((response) => {
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
      formTitle="Register"
      formIcon={<PersonAddIcon />}
      buttonTitle="Register"
      onSubmit={formik.handleSubmit}
    >
      <FormField
        variant="outlined"
        id="firstName"
        name="firstName"
        label="FirstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        textIcon={<PersonOutlineIcon />}
      />
      <FormField
        variant="outlined"
        id="lastName"
        name="lastName"
        label="LastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        textIcon={<PersonOutlineIcon />}
      />
      <FormField
        variant="outlined"
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        textIcon={<ContactPhoneIcon />}
        ContactPhoneIcon
      />
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
        variant="outlined"
        id="password"
        name="password"
        label="Password"
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
      <div
        style={{
          display: "flex",
          marginTop: 5,
          marginRight: 5,
          marginLeft: 5,
        }}
      >
        <Typography margin="normal">
          <Link to="signIn">Sign In</Link>
        </Typography>
      </div>
      <Loading visible={loading} />
    </Form>
  );
}
