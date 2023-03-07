import React from 'react';
import "./style.css";

function Footer() {
    return (
        <div class="footer">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6">
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3">

                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;