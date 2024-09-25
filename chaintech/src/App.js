import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AccountUpdate from './components/AccountUpdate';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
