import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (request) => {
    request.headers.Authorization = "token";
    console.log(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
