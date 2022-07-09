import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./Map";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./styles.css";
const locations = require("./locations.json");

function App() {
  return (
    <div className="App">
      <SimpleMap locations={locations} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
