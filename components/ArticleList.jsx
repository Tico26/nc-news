import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
export const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        );
      })}
    </ul>
  );
};
