import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../../../App";
import store from "../../../Redux/Store";
import { UserState } from "../../../Redux/UserState";
import LoginPage from "../../LoginPage/LoginPage";
import MovieList from "../../MovieArea/MovieList/MovieList";
import SingleMovie from "../../MovieArea/SingleMovie/SingleMovie";
import About from "../../PagesAread/About/About";
import Home from "../../PagesAread/Home/Home";
import Page404 from "../../PagesAread/Page404/Page404";
import ScreeningList from "../../ScreeningsArea/ScreeningList/ScreeningList";
import SingleScreening from "../../ScreeningsArea/SingleScreening/SingleScreening";
import SingleTicket from "../../TicketArea/SingleTicket/SingleTicket";
import TicketList from "../../TicketArea/TicketList/TicketList";
import "./Routing.css";

function Routing(): JSX.Element {
  const [logged, setLogged] = useState<boolean>(store.getState().userReducer.user.logged);
  useEffect(() => {
    return store.subscribe(() =>
      setLogged(store.getState().userReducer.user.logged)
    );
  }, []);
  console.log(logged);
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="home/login"
          element={logged ? <Navigate to="/home" /> : <LoginPage />}
        />

        {
          <Route
            path="screenings"
            element={logged ? <ScreeningList /> : <Navigate to="/home/login" />}
          />
        }
        {
          <Route
            path="movies"
            element={logged ? <MovieList /> : <Navigate to="/home/login" />}
          />
        }
        {
          <Route
            path="tickets"
            element={logged ? <TicketList /> : <Navigate to="/home/login" />}
          />
        }
        {
          <Route
            path="movies/:id"
            element={logged ? <SingleMovie /> : <Navigate to="/home/login" />}
          />
        }

        {
          <Route
            path="screenings/:id"
            element={
              logged ? <SingleScreening /> : <Navigate to="/home/login" />
            }
          />
        }
        {
          <Route
            path="tickets/:id"
            element={logged ? <SingleTicket /> : <Navigate to="/home/login" />}
          />
        }

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
