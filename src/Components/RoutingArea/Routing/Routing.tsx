import { useEffect, useState } from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import App from "../../../App";
import store from "../../../Redux/Store";
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

  const [token,setToken] =useState<string>("")
  useEffect(()=>{
    setToken(store.getState().userReducer.user.token)
    return store.subscribe(()=>{
      setToken(store.getState().userReducer.user.token)
    })
  },[])
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
            element={token ? <Navigate to="/home" /> : <LoginPage />}
          />
          {
            <Route
              path="screenings"
              element={
                token ? <ScreeningList /> : <Navigate to="/home/login" />
              }
            />
          }
          {
            <Route
              path="movies"
              element={token ? <MovieList /> : <Navigate to="/home/login" />}
            />
          }
          {
            <Route
              path="tickets"
              element={token ? <TicketList /> : <Navigate to="/home/login" />}
            />
          }
          {
            <Route
              path="movies/:id"
              element={token ? <SingleMovie /> : <Navigate to="/home/login" />}
            />
          }

          {
            <Route
              path="screenings/:id"
              element={
                token ? <SingleScreening /> : <Navigate to="/home/login" />
              }
            />
          }
          {
            <Route
              path="tickets/:id"
              element={
                token ? <SingleTicket /> : <Navigate to="/home/login" />
              }
            />
          }
        </Routes>
      </div>
    );
}

export default Routing;
