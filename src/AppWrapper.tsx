import { createStore } from "redux";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux/es/exports";

const AppWrapper = () => {
  const stor = store;

  return (
    <Provider store={stor}>
      <App /> 
    </Provider>
  );
};

export default AppWrapper;
