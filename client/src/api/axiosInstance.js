import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4004",
  headers: {
    "Content-Type": "application/json",
    "Content-Type":"multipart/form-data"
  },
  withCredentials: true
});

export default instance;