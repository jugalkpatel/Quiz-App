import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import App from "./App";
import { AuthProvider } from "./contexts/";

axios.defaults.baseURL = process.env.REACT_APP_URL;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
