import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MenuuBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link className="text-white text-decoration-none" to="/">Navbar</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link><NavLink activeStyle={{
              fontWeight: "bold",
            }} className="text-info text-decoration-none" to="/home">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{
              fontWeight: "bold",
            }} className="text-info text-decoration-none" to="/service">Service</NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{
              fontWeight: "bold",
            }} className="text-info text-decoration-none" to="/about">About us</NavLink></Nav.Link>
            <Nav.Link><NavLink  activeStyle={{
              fontWeight: "bold",
            }} className="text-info text-decoration-none" to="/login"><i class="bi bi-box-arrow-in-right"></i> Login</NavLink></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuuBar;