import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <section className="welcome-page">
      <div>
        <h1>Northcoders News Network</h1>
        <h4>News to entertain</h4>
      </div>
      <div className="welcome-buttons-container">
        <Link to="/articles" className="button">
          <p>All Articles</p>
        </Link>
        <Link to="/topics" className="button">
          <p>All Topics</p>
        </Link>
      </div>
    </section>
  );
};
