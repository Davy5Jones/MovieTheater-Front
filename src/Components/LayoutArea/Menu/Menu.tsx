import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../Redux/Store";
import "./Menu.css";

function Menu(): JSX.Element {
  
  const [token,setToken] =useState<String>(store.getState().userReducer.user.token);

  useEffect(
    () =>
      store.subscribe(() => setToken(store.getState().userReducer.user.token)),
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
        {token == "" && (
          <Link className="link" to="home/login">
            Login
          </Link>
        )}

        {token != "" && (
          <Link className="link" to="screenings">
            screenings
          </Link>
        )}
      </div>
    );
}

export default Menu;
