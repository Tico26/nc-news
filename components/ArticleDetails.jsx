import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";

export const ArticleDetails = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <h3>Made by: {article.author}</h3>
      <p>votes {article.votes}</p>
    </>
  );
};
