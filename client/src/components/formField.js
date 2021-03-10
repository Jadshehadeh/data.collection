import React from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";

export default function FormField(props) {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant={props.variant}
      id={props.id}
      name={props.name}
      label={props.label}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">{props.textIcon}</InputAdornment>
        ),
      }}
    />
  );
}
