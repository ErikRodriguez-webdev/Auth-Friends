import React from "react";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { PrivateRoute } from "./utils/PrivateRoute";

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
        <PrivateRoute path="/friends" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
