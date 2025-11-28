import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/main" 
            element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/results" 
            element={isAuthenticated ? <ResultPage /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;