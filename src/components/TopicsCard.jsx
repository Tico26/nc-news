import React from "react";
import { Link } from "react-router-dom";

export const TopicsCard = ({ topics }) => {
  return (
    <>
      <li>
        <Link to={`/topics/${topics.slug}`}>
          <h2>{topics.slug}</h2>
        </Link>

        <p>{topics.description}</p>
      </li>
    </>
  );
};

export default TopicsCard;
