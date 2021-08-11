import { http, http_login } from "./xhr/Axios";
import qs from "qs";

const register = (userModel) => {
  return http.post("/register", userModel);
};

const login = (userModel) => {
  return http_login.post(
    "/login",
    qs.stringify({
      username: userModel.username,
      password: userModel.password,
    })
  );
};

const forgot = (data) => {
  return http.post("/forgot?email=" + data);
};

const reset = (code, pass) => {
  return http_login.post(
    "/reset",
    qs.stringify({
      uuid: code,
      password: pass,
    })
  );
};

export { login, register, forgot, reset };
