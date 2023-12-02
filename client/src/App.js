import React from "react";
import "./App.css";
import Home from "./pages/home.js"
import SignIn from "./pages/signin.js"
import CreateAccount from "./pages/createaccount.js"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
      </Routes>
    </Router>
  );
}

export default App;