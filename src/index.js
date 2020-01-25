import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import todoStore from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={todoStore()}>
    <App />
  </Provider>,
  rootElement
);
