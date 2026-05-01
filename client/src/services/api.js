import axios from "axios";

const API = axios.create({
  baseURL: "https://future-fs-02-542u.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;