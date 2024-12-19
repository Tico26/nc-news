import { useContext, useState } from "react";
import { UserContext } from "./userContext";
import { postComment } from "../../api";
const PostComment = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
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
        <textarea type="textarea" value={comment} onChange={handleChange} />
        <button>Post Comment</button>
      </form>
    </>
  );
};

export default PostComment;
