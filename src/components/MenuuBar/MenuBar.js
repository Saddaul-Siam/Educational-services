import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink className="text-info text-decoration-none" to="/"><Navbar.Brand>Easy School</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><NavLink activeStyle={{
                fontWeight: "bold",
              }} className="text-info text-decoration-none" to="/home">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink activeStyle={{
                fontWeight: "bold",
              }} className="text-info text-decoration-none" to="/services">Services</NavLink></Nav.Link>
              <Nav.Link><NavLink activeStyle={{
                fontWeight: "bold",
              }} className="text-info text-decoration-none" to="/about">About us</NavLink></Nav.Link>
              <Nav.Link><NavLink activeStyle={{
                fontWeight: "bold",
              }} className="text-info text-decoration-none" to="/login"><i class="bi bi-box-arrow-in-right"></i> Login</NavLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;