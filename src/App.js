import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Albums from "./pages/Albums";
import './App.css';
import Photos from "./pages/Photos";


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
