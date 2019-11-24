import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./Components/App/App";

function Index() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
