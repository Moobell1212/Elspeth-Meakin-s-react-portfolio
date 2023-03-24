import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "./style.css";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h2>Elspeth Meakin's portfolio</h2>
                    </div>
                    <div className="col-md-4">
                        <h4>Links:</h4>
                        <li className="list-unstyled"><a href="https://github.com/Moobell1212" target="_blank" rel="noreferrer">Moobell1212</a></li>
                        <li className="list-unstyled"><a href="https://www.linkedin.com/in/elspeth-meakin-7289b3126/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact me:</h4>
                        <Link className="list-unstyled" to="/contact">via the Contact page</Link>
                        <li className="list-unstyled"><a href="mailto:elspeth.meakin@hotmail.co.uk" target="_blank" rel="noreferrer">via Email</a></li>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;