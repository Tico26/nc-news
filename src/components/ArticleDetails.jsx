import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, getComments } from "../../api";
import Comments from "./Comments";
export const ArticleDetails = () => {
  const { article_id } = useParams();
  const [commentToggle, setCommentToggle] = useState(false);
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
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

  const handleCommentToggle = () => {
    setCommentToggle(!commentToggle);
  };
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

          <p>+ {article.votes} - </p>
          <button onClick={handleCommentToggle}>
            {article.comment_count} Comments
          </button>
        </article>

        {commentToggle && <Comments comments={comments} />}
      </div>
    </section>
  );
};
