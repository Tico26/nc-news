import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      {/* <div id="logo-container">
        <img
          src="https://imgs.search.brave.com/MPrjdzLIHh6PVRaZEAmxeUKXoz5EeDEfUcKcjCw-xPE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2Y5YzRiMDUw/Y2EyOGM0YzY3NjA2/ZGViNjAzOTk3ODBh/MTJlNWExY2E2MGU0/YjhmMWVlMWU2Yjg1/ZTUxNjhmNS9ub3J0/aGNvZGVycy5jb20v"
          alt="Northcoders Logo"
        />
      </div> */}
      <div id="nav-link-container">
        <Link to="/">
          <button className="nav-links">Home</button>
        </Link>
        <Link to="/articles">
          <button className="nav-links">Articles</button>
        </Link>
        <Link to="/">
          <button className="nav-links">Topics</button>
        </Link>
        <a href="#weekly-mail">
          <button className="nav-links">Mail</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
