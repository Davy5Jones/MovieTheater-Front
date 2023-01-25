import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../Redux/Store";
import "./Menu.css";

function Menu(): JSX.Element {
  const [token, setToken] = useState<boolean>(
    store.getState().userReducer.user?.logged
  );

  useEffect(
    () =>{
     return store.subscribe(() => setToken(store.getState().userReducer.user.logged))},
    []
  );
  return (
    <div className="Menu">
      <Link className="link" to="home">
        Home
      </Link>
      <Link className="link" to="about">
        About
      </Link>
      {!token && (
        <Link className="link" to="home/login">
          Login
        </Link>
      )}
      {token && (
        <Link className="link" to="screenings">
          screenings
        </Link>
      )}
      {token && (
        <Link className="link" to="movies">
          movies
        </Link>
      )}
      {token && (
        <Link className="link" to="tickets">
          tickets
        </Link>
      )}
    </div>
  );
}

export default Menu;
