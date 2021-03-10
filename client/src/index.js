import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  timeout: 10000,
  position: positions.TOP_RIGHT,
};

const Application = () => (
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
);

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>
  document.getElementById("root")
);
