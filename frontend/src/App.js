import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserForm from './components/UserForm';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<Home />} />
        <Route path="/" element={<Form />} />
        <Route path="/edit/:id" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
