import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Header = () => {
  const { setUser } = useContext(UserContext);
  const handleSignIn = (e) => {
    setUser(e.target.value);
  };
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
      <div>
        <span>Set user</span>
        <select name="sign-in" id="sign-in" onChange={handleSignIn}>
          <option value=""></option>
          <option value="tickle122">tickle122</option>
          <option value="grumpy19">grumpy19</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="cooljmessy">cooljmessy</option>
          <option value="weegembump">weegembump</option>
          <option value="jessjelly">jessjelly</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
