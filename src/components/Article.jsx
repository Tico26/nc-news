import { getArticles } from "../../api";
import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList";
import { useParams, useSearchParams } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getArticles(topic, sortBy, order)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, order]);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setSearchParams((prev) => {
      prev.set("sort", e.target.value);
      return prev;
    });
  };
  const handleOrderBy = (e) => {
    setOrder(e.target.value);
    setSearchParams((prev) => {
      prev.set("order", e.target.value);
      return prev;
    });
  };
  return (
    <section className="all-articles">
      <div id="article-heading-container">
        <h3 id="article-heading">Articles</h3>
        <select
          name="sort_by"
          id="sort_by"
          value={sortBy}
          onChange={handleSortBy}
        >
          <option value={"author"}>Author</option>
          <option value={"created_at"}>Date created</option>
          <option value={"votes"}>Votes</option>
          <option value={"topic"}>Topic</option>
        </select>
        <select name="order" value={order} onChange={handleOrderBy} id="order">
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <ArticleList articles={articles} />
    </section>
  );
};
