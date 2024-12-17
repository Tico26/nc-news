import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList";
import { useParams } from "react-router-dom";
export const Articles = () => {
  const { article_id } = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles(article_id)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);
  return (
    <>
      <h1>Checkout all the articles!{articles.title}</h1>
      <ArticleList articles={articles} />
    </>
  );
};
