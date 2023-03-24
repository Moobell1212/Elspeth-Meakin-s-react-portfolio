import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./style.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" id="navbar" >
      <Container>
        <Link className="navbar-brand" to="/">Elspeth Meakin's Portfolio</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="linkname">Homepage</NavLink>
            <NavLink to="/projects" className="linkname">My projects</NavLink>
          </Nav>
          <Nav>
          <NavLink to="/contact">Contact me</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
