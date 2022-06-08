import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./welcome.tsx";
import Review from "./review.tsx";
import Add from "./add.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/add" component={Add} />
    </Switch>
  </BrowserRouter>
);
