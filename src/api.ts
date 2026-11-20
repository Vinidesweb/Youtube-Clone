import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? `http://${window.location.hostname}:4000`,
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;