import { BrowserRouter as Router } from "react-router-dom";

import './assets/css/global.css';

import Nav from "./components/Navigate";
import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
