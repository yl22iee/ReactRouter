import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
// import { Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
