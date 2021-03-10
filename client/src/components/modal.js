import React, { useState, useEffect } from "react";
import { getDetails } from "../api/details";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[15],
    padding: theme.spacing(2),
    borderRadius: "15px",
  },
}));

export default function Modal() {
  const classes = useStyles();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails().then((result) => setDetails(result.data));
  }, []);
  console.log(details);
  return (
    <div style={{ padding: 5 }}>
      <div className={classes.paper}>
        {details.map((d, i) => (
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            key={i}
          >
            <Grid> {details.alert}</Grid>
            <Grid> {details.title}</Grid>
            <Grid> {details.text}</Grid>
            <Grid> {details.phoneNumber}</Grid>
            <Grid> {details.address}</Grid>
            <Grid> {details.fax}</Grid>
            <Grid> {details.email}</Grid>
            <Grid> {details.ourServices}</Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}
