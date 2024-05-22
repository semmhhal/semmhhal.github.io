import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "content-Type": "application/json",
  },
});
