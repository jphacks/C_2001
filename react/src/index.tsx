import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/Root";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./services/utiils/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <Root />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
