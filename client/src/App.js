import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <h1>Hello World!</h1>

      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
