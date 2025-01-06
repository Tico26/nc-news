import { useContext, useState } from "react";
import { postComment } from "../../api";
import { UserContext } from "./UserContext";

const PostComment = ({ article_id }) => {
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(article_id, user, comment).then((response) => {
      return response;
    });
    setComment("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} id="post-comment">
        <textarea
          type="textarea"
          value={comment}
          onChange={handleChange}
          required
        />
        <button>Post Comment</button>
      </form>
    </>
  );
};

export default PostComment;
