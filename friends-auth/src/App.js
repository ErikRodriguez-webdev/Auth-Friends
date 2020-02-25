import React from "react";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";

//React Routes
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
