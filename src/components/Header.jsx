import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <div id="nav-link-container">
        <Link to="/">
          <button className="nav-links">Home</button>
        </Link>
        <Link to="/articles">
          <button className="nav-links">Articles</button>
        </Link>
        <Link to="/topics">
          <button className="nav-links">Topics</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
