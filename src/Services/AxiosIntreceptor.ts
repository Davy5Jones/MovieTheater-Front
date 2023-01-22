import axios from "axios";
import { Navigate } from "react-router-dom";
import { gotUserToken } from "../Redux/UserState";
import store from "../Redux/Store";
import notify from "./NotificationService";
const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((req) => {
  const token = store.getState().userReducer.user.token;
  if (token != "") {
    req.headers = { authorization: "Bearer " + token };
  }
  return req;
});

tokenAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response.status||error.response.status === 401) {
      notify.error(new Error("Please login"));
      localStorage.setItem("token", "");
      store.dispatch(gotUserToken(""));
      return;
    }
    notify.error(error);
  }
);

export default tokenAxios;
