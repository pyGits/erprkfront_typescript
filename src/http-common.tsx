import axios from "axios";

export default axios.create({
  baseURL: "https://erprkback.herokuapp.com/api",
  // baseURL: "http://127.0.0.1:3333/api",
  headers: {
    "content-type": "application/json",
  },
});
