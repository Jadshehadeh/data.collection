import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <CircularProgress style={{ display: props.visible }} />
    </div>
  );
}
