import './App.css';
import React from 'react';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
