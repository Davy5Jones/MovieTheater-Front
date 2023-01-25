import "./App.css";
import Header from "./Components/LayoutArea/Header/Header";
import Menu from "./Components/LayoutArea/Menu/Menu";
import Main from "./Components/LayoutArea/Main/Main";
import Footer from "./Components/LayoutArea/Footer/Footer";
import store from "./Redux/Store";
import { gotUserLogged } from "./Redux/UserState";
import { useEffect } from "react";
import webApi from "./Services/WebApi";
import notify from "./Services/NotificationService";
import { useSelector } from "react-redux";
import { UserObject } from "./Models/UserModel";
import { useCookies } from "react-cookie";


function App() {
  useEffect(() => {
      webApi.customerDetails().then((res) => {
        console.log(res.data);
        console.log("hi");
        store.dispatch(gotUserLogged({ details: res.data, logged: true }));
      })
    
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
