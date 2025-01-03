import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-api-3-w57y.onrender.com/api/",
});

export const getArticles = (topic, sort_by, order) => {
  return ncNewsApi
    .get(`/articles`, { params: { sort_by, order, topic } })
    .then((response) => {
      return response.data.articles;
    });
};

export const getArticleById = async (article_id) => {
  const response = await ncNewsApi.get(`/articles/${article_id}`);
  return response.data.article;
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (article_id, user, comment) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, {
      username: user,
      body: comment,
    })
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`).then((response) => {
    return response.data.msg;
  });
};

export const getTopics = () => {
  return ncNewsApi.get(`/topics/`).then((response) => {
    return response.data.topics;
  });
};
export const postVotes = (article_id, num) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: num })
    .then((response) => {
      return response.data.article;
    });
};
