import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubLogo from '../../images/github-mark-white.png'
import LinkedInLogo from '../../images/LI-In-Bug.png'
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
        <a href="https://www.linkedin.com/in/elspeth-meakin/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn logo" width="30" className="social-media-icon"/></a>
        <a href="https://github.com/Moobell1212" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub logo" width="30" className="social-media-icon"/></a>
      </Container>
    </Navbar>
  );
}