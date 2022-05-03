import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";
import { BrowserRouter } from "react-router-dom";
// Bootstrap Css
import '../src/app/assets/css/vendor/bootstrap.min.css';
// Icons Css
// Icons Css -->
import "../src/app/assets/css/vendor/linearicons.min.css"
import "../src/app/assets/css/vendor/fontawesome-all.min.css"

 // Animation Css -->
import "../src/app/assets/css/plugins/animation.min.css"

// Slick Slier Css -->
import "../src/app/assets/css/plugins/slick.min.css"

// Magnific Popup CSS -->
import "../src/app/assets/css/plugins/magnific-popup.css"

// Easyzoom CSS -->
import "../src/app/assets/css/plugins/easyzoom.css"

// Main Style CSS -->
import "../src/app/assets/css/style.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
