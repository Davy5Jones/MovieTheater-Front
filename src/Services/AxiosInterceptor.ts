import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import store from "../Redux/Store";
import { gotUserLogged } from "../Redux/UserState";
import notify from "./NotificationService";
const axiosInterceptor = axios.create();

axiosInterceptor.interceptors.request.use((req) => {
  //req.headers = { withCredentials: true };
  return req;
});

axiosInterceptor.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response.status || error.response.status === 401) {
      notify.error(new Error("Please login"));
      store.dispatch(
        gotUserLogged({
          details: {
            id: 0,
            emailAddress: "",
            customerName: "",
            _links: { self: { href: "" }, tickets: { href: "" } },
          },
          logged: false,
        })
      );
      return;
    }
    notify.error(error);
  }
);

export default axiosInterceptor;
