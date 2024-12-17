import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-api-3-w57y.onrender.com/api/",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles/").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};
