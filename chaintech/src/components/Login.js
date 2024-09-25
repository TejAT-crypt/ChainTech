import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verify the credentials
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/account');
    } else if (storedUser && storedUser.email === email && storedUser.password !== password) {
      alert('Invalid password');
    } else if (storedUser && storedUser.email !== email && storedUser.password === password) {
      alert('Invalid email');
    } else {
      alert('Account Not Found, Register here!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5 border-0 rounded-3">
        <h2 className="card-title text-center p-4">Login</h2>

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
            Login
          </button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account? <a href="/register">Register here</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
