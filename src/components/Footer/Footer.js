import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Easy School</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <i class="bi bi-instagram"></i>
                  </div>
                  <div className="icon">
                    <i class="bi bi-twitter"></i>
                  </div>
                  <div className="icon">
                    <i class="bi bi-youtube"></i>
                  </div>
                  <div className="icon">
                    <i class="bi bi-facebook"></i>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    Easy School is an online educational platform in Bangladesh created in 2021 by Saddaul Siam
                  </small>
                </p>

                <p className="mt-5">
                  <small>© All Copyright Easy School 2021</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <Link className="text-info text-decoration-none" to="/home"><li className="footer-menu">Home</li></Link>
                  <Link className="text-info text-decoration-none" to="/services"><li className="footer-menu">Services</li></Link>
                  <Link className="text-info text-decoration-none" to="/about"><li className="footer-menu"> About us</li></Link>
                  <Link className="text-info text-decoration-none" to="/login"><li className="footer-menu">Login</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the news letter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <i class="bi bi-phone"></i>
                  </div>
                  <div>
                    <h5>+88013**************</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <i class="bi bi-shop"></i>
                  </div>
                  <div>
                    <p>Pabna, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
