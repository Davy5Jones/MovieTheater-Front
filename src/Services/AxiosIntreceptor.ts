import axios from "axios";
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
    if(error.status)
    notify.error(error);
  }
);

export default tokenAxios;
