import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081/rest";

const http = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

const http_login = axios.create({
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});

export { http, http_login };
