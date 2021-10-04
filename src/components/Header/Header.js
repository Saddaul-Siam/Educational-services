import React from 'react';
import "./Header.css"
import img from '../../img/images.jpeg'

const Header = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <h1>
            BE THE BASKETBALL <br /> STAR AND SHINE
          </h1>
          <p className="text-white text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="col-md-6">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
