import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Storing user details in localStorage
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5 border-0 rounded-3">
        <h2 className="card-title text-center p-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <a href="/login">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
