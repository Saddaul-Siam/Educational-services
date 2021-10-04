import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className="section fixt-top">
      <div id="section" className="container d-flex align-items-center justify-content-center">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <h1 className="text-white mt-3 w-100">
              Easy solution to study at home
            </h1>
            <p className="text-white mt-3">
              Easy School is an online educational platform in Bangladesh created in 2021 by Saddaul Siam 
            </p>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
