import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  decreaseVote,
  getArticleById,
  getComments,
  increaseVote,
} from "../../api";
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

  const handleVoteInc = () => {
    setVotes((voteCount) => voteCount + 1);
    setError(null);
    increaseVote(article_id).catch((err) => {
      setVotes((voteCount) => voteCount - 1);
      setError("Your like was not successful. Please try again!");
    });
  };
  const handleVoteDec = () => {
    setVotes((voteCount) => voteCount - 1);
    setError(null);
    decreaseVote(article_id).catch((err) => {
      setVotes((voteCount) => voteCount + 1);
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

          <p>
            <button onClick={handleVoteInc}>+</button> {votes}
            <button onClick={handleVoteDec}>-</button>
            {error ? <p>{error}</p> : null}
          </p>
          <PostComment article_id={article_id} />
          <br />
          <button onClick={handleCommentToggle}>
            {article.comment_count} Comments
          </button>
        </article>

        {commentToggle && <Comments comments={comments} />}
      </div>
    </section>
  );
};
