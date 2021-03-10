// import axios from "axios";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Form(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "15px",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(2, 0, 2),
      borderRadius: 25,
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{props.formIcon}</Avatar>
        <Typography component="h1" variant="h5">
          {props.formTitle}
        </Typography>

        <form className={classes.form} onSubmit={props.onSubmit}>
          {props.children}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography component="h1">{props.buttonTitle}</Typography>
          </Button>
        </form>
      </div>
    </Container>
  );
}
