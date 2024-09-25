import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountUpdate = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      navigate('/login');
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }

    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setIsEditing(false);
    alert('Account details updated successfully');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 border-0 rounded-3">
        <h2 className="card-title text-center p-4">Account Information</h2>

        {showAlert && (
          <div className="alert alert-danger" role="alert">
            To Update Account Information, Press Edit.
          </div>
        )}

        <div className="form-group mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group mb-4">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="d-flex justify-content-between">
          {isEditing ? (
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountUpdate;
