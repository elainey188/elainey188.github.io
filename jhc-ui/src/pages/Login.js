import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    
    history.push("/pages/Upload"); 
  };

  return (
    
    <div className="login-container">
       
      <h1 className="login-heading">Login </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
       
          />
          <p className="forgot-password-link">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
      <p className="login-register-link">
        Don't have an account? <Link to="/pages/Register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
