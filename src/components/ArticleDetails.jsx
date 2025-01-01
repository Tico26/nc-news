import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, getComments, postVotes } from "../../api";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { Loading } from "./Loading";

export const ArticleDetails = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [commentToggle, setCommentToggle] = useState(false);
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleVotes = (num) => {
    setVotes((voteCount) => voteCount + num);
    setError(null);
    postVotes(article_id, num).catch((err) => {
      setVotes((voteCount) => voteCount - num);
      setError("Your like was not successful. Please try again!");
    });
  };
  const handleCommentToggle = () => {
    setCommentToggle(!commentToggle);
  };
  if (isLoading) return <Loading />;

  return (
    <section id="article-display">
      <div className="article-page-container">
        <article>
          <h2>{article.title}</h2>
          <img src={article.article_img_url} />
          <span>by: {article.author}</span>
          <h4 id="article-topic">{article.topic}</h4>
          <div id="article-body-container">
            <p id="article-body">{article.body}</p>
          </div>
          <button className="vote-button" onClick={() => handleVotes(1)}>
            <p id="upvote">&#11014;</p>
          </button>
          {votes}
          <button className="vote-button" onClick={() => handleVotes(-1)}>
            <p className="downvote">&#11015;</p>
          </button>
          {error ? <p id="vote-error">{error}</p> : null}
          <PostComment article_id={article_id} />
          <br />

          <button id="toggle-comments" onClick={handleCommentToggle}>
            {commentToggle ? "Collapse " : "View "}
            {article.comment_count} Comments
          </button>
        </article>
        {commentToggle && <Comments comments={comments} />}
      </div>
    </section>
  );
};
