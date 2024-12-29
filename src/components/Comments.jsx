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
          <li className="comments-list" key={comment.comment_id}>
            <p>{comment.body}</p>
            <div id="author-votes">
              <h4>{comment.author}</h4>
              <h4>{comment.votes}</h4>
            </div>

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
