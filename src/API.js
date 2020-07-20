import axios from "axios";

const API = axios.create({
  baseURL: "https://pixabay.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    safesearch: true,
    key: process.env.REACT_APP_PIXABAY_API_KEY,
  },
});

export default API;
