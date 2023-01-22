
import "./App.css";
import Header from "./Components/LayoutArea/Header/Header";
import Menu from "./Components/LayoutArea/Menu/Menu";
import Main from "./Components/LayoutArea/Main/Main";
import Footer from "./Components/LayoutArea/Footer/Footer";
import store from "./Redux/Store";
import { gotUserDetails, gotUserToken } from "./Redux/AppState";
import { useEffect } from "react"; 
import webApi from "./Services/WebApi";
import notify from "./Services/NotificationService";

function init() {
  const tokenString = localStorage.getItem("token");
  if(tokenString!==null) {
    store.dispatch(gotUserToken(tokenString));
  webApi.customerDetails()
  .then(res=>{
    store.dispatch(gotUserDetails(res.data))
 ;
  }).catch(err=>{
    notify.error(err)
      store.dispatch(gotUserToken(""));
  });
  }
}

function App() {
useEffect(() => {
  init();
}, [store.getState().userReducer.user.token]);

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
