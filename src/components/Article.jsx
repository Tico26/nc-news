import { getArticles } from "../../api";
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
    <section className="all-articles">
      <div id="article-heading-container">
        <h3 id="article-heading">Articles</h3>
      </div>
      <ArticleList articles={articles} />
    </section>
  );
};
