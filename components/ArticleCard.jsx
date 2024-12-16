export const ArticleCard = ({ article }) => {
  return (
    <>
      <li className="article">
        <h2>{article.title}</h2>
        <h3>{article.topic}</h3>
        <img src={article.article_img_url} />
        <h3>Made by: {article.author}</h3>
        <p>votes{article.votes}</p>
      </li>
    </>
  );
};
