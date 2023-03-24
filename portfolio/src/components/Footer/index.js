import React from 'react';
import "./style.css";

function Footer() {
    return (
        <div className="footer">
            <div className="row text-center">
                <div className="col-md-6">
                    <p>Elspeth Meakin's portfolio. Contact me via:</p>
                </div>
                <div className="col-md-3">
                    <li className="list-unstyled"><a href="https://github.com/Moobell1212" target="_blank">my GitHub</a></li>
                </div>
                <div className="col-md-3">
                    <li className="list-unstyled"><a href="https://www.linkedin.com/in/elspeth-meakin-7289b3126/" target="_blank">my LinkedIn</a></li>
                </div>
            </div>
        </div>
    )
}

export default Footer;