import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from "./AppWrapper";
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <CookiesProvider>
    <AppWrapper />
    </CookiesProvider>
  </BrowserRouter>
);


