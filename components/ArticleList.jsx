import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
export const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};
