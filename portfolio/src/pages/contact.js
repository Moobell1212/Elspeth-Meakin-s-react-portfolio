import React from "react";
import Container from 'react-bootstrap/Container';
import myCV from "../images/myCV.png";
import CV from "../downloads/Elspeth_Meakin's_CV.pdf";
import Contactform from '../components/Form'; 

export default function Contact(){
    return (
        <div style={{ minHeight: "calc(100vh - 185px)", margin: "50px 0px"}}>
        <Container>
        <h1>Contact page</h1>
        <h5>GitHub: <a href="https://github.com/Moobell1212" target="_blank" rel="noreferrer" >Moobell1212</a></h5>
        <h5>LinkedIn: <a href="https://www.linkedin.com/in/elspeth-meakin-7289b3126/" target="_blank" rel="noreferrer" >Elspeth Meakin</a></h5>
        <h2 style={{ marginTop: "20px" }}>Contact me via the form below:</h2>
        <Contactform />
        <h2>My CV:</h2>
        <a href={CV} download><img src={myCV} alt="CV" width="100%" /></a>
        </Container>
        </div>
    );
}
