import React from "react";
import "./App.css";
import Home from "./pages/home.js"
import {Router} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Router path="/" element={<Home/>}/>
      </div>
    </Router>
  );
}

export default App;