import "./LoginPage.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginModel } from "../../Models/BaseModels";
import webApi from "../../Services/WebApi";
import notify from "../../Services/NotificationService";
import store from "../../Redux/Store";
import { gotUserToken } from "../../Redux/UserState";
import { useEffect } from "react";
function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    if (store.getState().userReducer.user.token != "") navigate("/home");
  }, [store.getState().userReducer.user.token]);
  if (store.getState().userReducer.user.token != "") navigate("/home");
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email pattern")
      .required("Email is required"),
    password: yup
      .string()
      .min(4, "password length minimum is 4 letters")
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });

  const postLogin = async (obj: LoginModel) => {
    if (store.getState().userReducer.user.token != "") {
      navigate("/home");
    }
    const credentials = {
      email: obj.email,
      password: obj.password,
      stayLoggedIn: obj.stayLoggedIn,
    };
    await webApi
      .customerLogin(credentials)
      .then((res) => {
        notify.success("login successfully");
        console.log(res.data);
        // Update global State
        store.dispatch(gotUserToken(res.data));
        setToken(res.data);
        //navigate("/todos");
        navigate("/home");
      })
      .catch((err) => notify.error(err));
  };
  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(postLogin)}>
        {!errors.email ? (
          <label htmlFor="email">Email</label>
        ) : (
          <span>{errors.email.message}</span>
        )}
        <input {...register("email")} type="email" placeholder="email" />
        {!errors.password ? (
          <label htmlFor="password">Password</label>
        ) : (
          <span>{errors.password.message}</span>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button disabled={!isValid}>Login</button>
      </form>
    </div>
  );
}

function setToken(token: string) {
  localStorage.setItem("token", token);
}

export default LoginPage;
