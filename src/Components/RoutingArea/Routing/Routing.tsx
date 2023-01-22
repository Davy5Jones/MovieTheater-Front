import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import App from "../../../App";
import store from "../../../Redux/Store";
import LoginPage from "../../LoginPage/LoginPage";
import About from "../../PagesAread/About/About";
import Home from "../../PagesAread/Home/Home";
import Page404 from "../../PagesAread/Page404/Page404";
import ScreeningList from "../../ScreeningsArea/ScreeningList/ScreeningList";
import "./Routing.css";

function Routing(): JSX.Element {
    const navigate = useNavigate();

    return (
      <div className="Routing">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
          <Route
            path="home/login"
            element={
              store.getState().userReducer.user.token ? (
                <Navigate to="/home" />
              ) : (
                <LoginPage />
              )
            }
          />
          {
            <Route
              path="screenings"
              element={
                store.getState().userReducer.user.token ? (
                  <ScreeningList />
                ) : (
                  <Navigate to="/home/login" />
                )
              }
            />
          }
        </Routes>
      </div>
    );
}

export default Routing;
