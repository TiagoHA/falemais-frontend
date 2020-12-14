import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost/api/5000",
});
