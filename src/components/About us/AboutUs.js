import React from 'react';
import img from '../../img/images.jpeg'
import './About.css'

const AboutUs = () => {
  return (
    <div  className="pt-5 padding">
      <img src={img} alt="" />
      <h2>If you have any questions, please contacts us</h2>
      <h5>Email: saddadul.siam@gmail.com</h5>
      <p>Phone:+88013********</p>
    </div>
  );
};

export default AboutUs;