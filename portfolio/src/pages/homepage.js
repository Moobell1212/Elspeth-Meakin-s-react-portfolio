import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/Carousel";
import HomepageBanner from "../components/HomepageBanner/banner";

export default function Homepage() {
    return (
        <div>
            <HomepageBanner />
            <div style={{ backgroundColor: "#65D7F1", padding: "100px 0px" }}>
                <Container>
                    <h2>About me:</h2>
                    <p style={{ fontSize: 20 }}>Former science content producer turned front-end developer with a certificate from Trilogy’s skills
                        bootcamp in front-end web development (<a href="https://skillsforlife.edx.org/" target="_blank" rel="noreferrer">https://skillsforlife.edx.org/</a>),
                        where I graduated with a A+ grade (100%) in my projects and assignments.</p>
                </Container>
            </div>
            <div style={{ backgroundColor: "#C8F0FA", padding: "100px 0px" }}>
                <Container>
                    <h2>Here are some of the langauges and technologies I know and have used:</h2>
                    <div className="row" style={{ marginTop: 20, fontSize: 20 }}>
                        <div className="col-md-4 name" >
                            <ul>
                                <li>React</li>
                                <li>Node</li>
                                <li>JavaScript ES6+</li>
                                <li>HTML5</li>
                                <li>CSS3</li>

                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>API's</li>
                                <li>Bootstrap</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>SASS</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>JQuery</li>
                                <li>Express</li>
                                <li>Redux</li>
                                <li>Test-driven development & Behavior-driven development</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div style={{ backgroundColor: "#99E4F7", padding: "100px 0px" }}>
                <Container>
                    <h2>My pinned repositories on GitHub:</h2>
                    <Carousel />
                </Container>
            </div>
        </div >
    );
}