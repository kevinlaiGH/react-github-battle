import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
// State
// Lifecycle
// UI

// export default App;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
