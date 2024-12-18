import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Link to="/">NC News</Link>
      <form id="weekly-mail">
        <label htmlFor="email">join weekly mail </label>
        <input placeholder="john@carter.com" id="email" name="email" />
        <button>Join!</button>
      </form>
    </footer>
  );
};

export default Footer;
