import { Link } from "react-router-dom";
import ArticleContainer from "./ArticleContainer";

export const ArticleCard = ({ article }) => {
  return (
    <>
      <li className="article">
        <ArticleContainer>
          <Link to={`/articles/${article.article_id}`}>
            <img
              src={article.article_img_url}
              alt={`Image for ${article.title}`}
            />
          </Link>
          <div className="">
            <h6 className="article-elements author-votes">
              <span id="author">by {article.author}</span>
              <span id="votes" className="article-elements">
                votes: {article.votes}
              </span>
            </h6>
          </div>
          <Link to={`/articles/${article.article_id}`}>
            <h4 className="article-elements">{article.title}</h4>
          </Link>

          <p id="topic" className="article-elements">
            {article.topic}
          </p>
        </ArticleContainer>
      </li>
    </>
  );
};
