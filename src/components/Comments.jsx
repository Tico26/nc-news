import { useContext, useState } from "react";
import { UserContext } from "./userContext";
import React from "react";
import { deleteComment } from "../../api";

export const Comments = ({ comments }) => {
  const { user } = useContext(UserContext);
  const handleDelete = (e) => {
    deleteComment(e.target.value).then((response) => {
      console.log(response);
    });
  };
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <h2>{comment.author}</h2>
            <p>{comment.body}</p>
            <h4>{comment.votes}</h4>
            {user === comment.author && (
              <button value={comment.comment_id} onClick={handleDelete}>
                X
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
