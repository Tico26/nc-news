import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList";
export const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Checkout all the articles!{articles.title}</h1>
      <ArticleList articles={articles} />
    </>
  );
};
