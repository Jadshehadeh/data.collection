import React from "react";
import { useAlert } from "react-alert";
import { verifyEmail } from "../auth/index";
import { useLocation } from "react-router-dom";

export default function VerifyEmail({ history }) {
  const alert = useAlert();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const token = query.get("token");

  verifyEmail(token)
    .then((response) => {
      alert.success(response.data.message);
      history.push("/signIn");
    })
    .catch((error) => {
      alert.error(error.response.data.message);
      history.push("/signIn");
    });

  return <></>;
}
