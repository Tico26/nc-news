import React from "react";

export const Comments = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li>
            <h2>{comment.author}</h2>
            <p>{comment.body}</p>
            <h4>{comment.votes}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
