import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-api-3-w57y.onrender.com/api/",
});

export const getArticles = (article_id) => {
  return ncNewsApi
    .get("/articles/", { params: { article_id: article_id } })
    .then((response) => {
      const param = response.config.params.article_id;
      if (param) {
        const individualArticle = response.data.articles.filter((element) => {
          return element.article_id == article_id;
        });
        return individualArticle;
      }
      return response.data.articles;
    });
};
