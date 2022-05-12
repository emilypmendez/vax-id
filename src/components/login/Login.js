import header from '../../assets/header.png'
// import React, { useState } from "react";
// import { Navigate} from "react-router-dom";

function Login() {

  return (
    <div className="login">
    <img src={header} className="Header-logo" alt="header-logo" />
      <h2 className="login-header">Login</h2>

      <form id="loginForm" className="login-container" name="loginForm">
        <p><input type="employer-id" placeholder="Employer ID"/></p>
        <p><input type="password" placeholder="Password"/></p>
        <p><input type="submit" value="Login"/></p>
        {/* <button type="submit" id="submit-button">Login</button> */}
      </form>

    </div>
  );
}

export default Login;
