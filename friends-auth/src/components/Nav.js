import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="links">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
    </nav>
  );
};
export default Nav;
