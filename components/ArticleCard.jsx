import { useNavigate, Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/articles/${article.article_id}`);
  };
  return (
    <>
      <li className="article">
        <h2>{article.title}</h2>
        <h3>{article.topic}</h3>
        <Link to={`${article.article_id}`}>
          <img src={article.article_img_url} />
        </Link>

        <h3>Made by: {article.author}</h3>
        <p>votes{article.votes}</p>
      </li>
    </>
  );
};
