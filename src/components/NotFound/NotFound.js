import React from 'react';
import { useHistory } from 'react-router';
import img from "../../img/error.png"
const NotFound = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/home')
  }
  return (
    <div className="py-5 ">
      <img src={img} alt="" />
      <h1>Page Not Found!</h1>
      <p>Please try searching for some other page.</p>
      <button onClick={handelClick} className="btn btn-info">Back to Home</button>
    </div>
  );
};

export default NotFound;