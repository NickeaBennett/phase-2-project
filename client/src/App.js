import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import PersistentDrawerLeft from "./components/drawer/Drawer ";
import Navbar from './components/navbar/Navbar';
import Homepage from "./components/homepage/Homepage";
import Cryptocurrency from "./components/cryptocurency/Cryptocurrency";
import Favorites from "./components/favorites/Favorites";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
        <PersistentDrawerLeft />
      </div>
      <div className="Main">
          <h1>Hello World!</h1>

        <div className="Routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurency" element={<Cryptocurrency />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <div className="Footer">

        </div>
      </div>
    </div>
  );
}

export default App;
