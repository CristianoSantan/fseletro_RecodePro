import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/css/global.css";

import Nav from "./components/Navigate";
import Routes from "./routes";
import Footer from "./components/Footer";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
