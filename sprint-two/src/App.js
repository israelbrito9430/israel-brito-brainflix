import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage";
import Header from "./components/Header/Header"

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/:id" component={HomePage}></Route>
        <Route exact path="/upload" component={VideoUploadPage}></Route>
      </Switch>
    </Router>
  );
}
