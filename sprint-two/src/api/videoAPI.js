import axios from "axios";
const API_KEY = "4487e566-8c1f-4423-a1fb-c37aede35639";

export const getVideos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getVideoById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addCommentById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteCommentById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
