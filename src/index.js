import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ReactFCCtest from "react-fcctest";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ReactFCCtest />
    <App />
  </React.StrictMode>,
  rootElement
);
