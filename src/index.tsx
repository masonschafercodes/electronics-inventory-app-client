import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import App from "./App";
import AddUser from "./pages/AddUser";
import AddDevice from "./pages/AddDevice";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/add-user" component={AddUser} />
      <Route path="/add-device" component={AddDevice} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
