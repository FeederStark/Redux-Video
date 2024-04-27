import axios from "axios";

export const api = axios.create({
  baseURL: "https://react-video-json-server.vercel.app/",
});
