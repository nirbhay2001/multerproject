import axios from "axios";

const instance = axios.create({
  baseURL: "https://multerproject.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "Content-Type":"multipart/form-data"
  },
  withCredentials: true
});

export default instance;