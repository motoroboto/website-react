import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import "./scripts/masthead.js";
import Nav from "./components/navbar.js";
import Main from "./pages/main.js";
import Footer from "./components/footer.js";
import Mixtapes from "./pages/mixtapes.js";
import Halloween from "./pages/halloween.js";
import Christmas from "./pages/christmas.js";
import Originals from "./pages/originals.js";
import Summer from "./pages/summer.js";
import Mashups from "./pages/mashups.js";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/mixtapes' element={<Mixtapes />} />
            <Route path='/mixtapes/halloween' element={<Halloween />} />
            <Route path='/mixtapes/christmas' element={<Christmas />} />
            <Route path='/mixtapes/summer' element={<Summer />} />
            <Route path='/originals' element={<Originals />} />
            <Route path='/mashups' element={<Mashups />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
