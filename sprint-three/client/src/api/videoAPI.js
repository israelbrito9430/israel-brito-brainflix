import axios from "axios";
// const API_KEY = "4487e566-8c1f-4423-a1fb-c37aede35639";
// const API_SERVER = 'https://project-2-api.herokuapp.com';
const API_SERVER = 'http://localhost:9000/api';

export const GetVideos = () => {
  return new Promise((resolve, reject) => {
    axios
      // .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
      .get(`${API_SERVER}/videos`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const GetVideoById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      //.get(`${API_SERVER}/videos/${id}?api_key=${API_KEY}`)
      .get(`${API_SERVER}/videos/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const AddCommentById = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      // .post(`${API_SERVER}/videos/${id}/comments?api_key=${API_KEY}`, data)
      .post(`${API_SERVER}/videos/${id}/comments`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DeleteCommentById = (videoId, commentId) => {
  return new Promise((resolve, reject) => {
    axios
      // .delete(`${API_SERVER}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`)
      .delete(`${API_SERVER}/videos/${videoId}/comments/${commentId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const UploadVideo = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_SERVER}/videos`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};