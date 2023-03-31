import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" >
      <Container>
        <Link className="navbar-brand" to="/">Elspeth Meakin's Portfolio</Link>
        <Nav className="me-auto">
          <NavLink to="/" className="link">Homepage</NavLink>
        </Nav>
        <Nav className="me-auto">
          <NavLink to="/projects" className="link">My projects</NavLink>
        </Nav>
        <Nav className="me-auto">
          <NavLink to="/contact" className="link">Contact me</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}