import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <p>NC News</p>
      </Link>
      <p>All rights reserved</p>
    </footer>
  );
};

export default Footer;
