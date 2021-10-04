import React from 'react';
import './Login.css'
const Login = () => {
  return (
    <div className="py-5">
      <h5>Easy solution to study at home</h5>
      <p className="mb-1">Email/Phone number</p>
      <input className="mb-2 input-field" placeholder='phone/email' type="text" />
      <br />
      <button className="login-btn" >Login</button>
    </div>
  );
};

export default Login;