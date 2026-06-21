import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-mern-1-9pps.onrender.com/api",
});

export default API;