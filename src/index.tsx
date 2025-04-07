// React
import React from "react";
// React

// React DOM
import ReactDOM from "react-dom/client";
// React DOM

// Components
import App from "./App";
// Components

import "./global.css";

// Redux Toolkit
import { Provider } from "react-redux";
import { store } from './StateManagemnt/RTK/Store/store';
// Redux Toolkit

// Router
import { BrowserRouter } from "react-router-dom";
// Router


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
