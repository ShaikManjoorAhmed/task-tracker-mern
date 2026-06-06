import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-mern-raza.onrender.com/api",
});

export default API;