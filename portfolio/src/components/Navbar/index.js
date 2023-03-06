import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Link className="navbar-brand" to="/">Elspeth Meakin's Portfolio</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Homepage</Nav.Link>
            <Link to="/projects">My projects</Link>
          </Nav>
          <Nav>
          <Link to="/contact">Contact me</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navibar;