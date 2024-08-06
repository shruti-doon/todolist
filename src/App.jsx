import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './assets/About.jsx';
import ToDoList from './assets/ToDoList.jsx';
import Navbar from './assets/Navbar.jsx';

const App = () => {
  return (
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;
