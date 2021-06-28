import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import PageHome from "./pages/PageHome";
import PageUpload from "./pages/PageUpload";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={PageHome} ></Route>
          <Route exact path="/home" component={PageHome}></Route>
          <Route path="/home/:id" component={PageHome}></Route>
          <Route exact path="/upload" component={PageUpload}></Route>
        </Switch>
    </Router>
  );
}
