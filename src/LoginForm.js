// src/LoginForm.js
import React from 'react';
import './LoginForm.css';
import './App.css';

const LoginForm = () => {
  return (
    <div className="alfy">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt' ></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="http://127.0.0.1:3000/register">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="http://127.0.0.1:3000/register">Register</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
