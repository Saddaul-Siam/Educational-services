import React from 'react';
import { useHistory } from 'react-router';
import './Login.css'
const Login = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/loginDetails')
  }
  return (
    <div className="py-5 ">
      <h5>Easy solution to study at home</h5>
      <p className="mb-1">Email/Phone number</p>
      <input className="mb-2 input-field" placeholder='phone/email' type="text" />
      <br />
      <input className="input-field" placeholder='password' type="password" />
      <br />
      <button onClick={handelClick} className="login-btn" >Login</button>
    </div>
  );
};

export default Login;