import './App.css';
import React from "react";
import styled from "styled-components"
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
