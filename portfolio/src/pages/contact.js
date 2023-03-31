import React from "react";
import Container from 'react-bootstrap/Container';
import myCV from "../images/myCV.png";
import CV from "../downloads/Elspeth_Meakin's_CV.pdf"; 

export default function Contact() {
    return (
        <Container style={{ minHeight: "calc(100vh - 240px)" }}>
            <h1 style={{ marginTop: 50 }}>Contact me via:</h1>
            <h5 style={{ marginTop: 30 }}>GitHub: <a href="https://github.com/Moobell1212" target="_blank" rel="noreferrer" >Moobell1212</a></h5>
            <h5 style={{ marginTop: 10 }}>LinkedIn: <a href="https://www.linkedin.com/in/elspeth-meakin/" target="_blank" rel="noreferrer" >Elspeth Meakin</a></h5>
            <h2 style={{ margin: "50px 0px 20px 0px" }}>My CV:</h2>
            <a href={CV} download ><img src={myCV} alt="CV" width="100%" style={{ marginBottom: 50 }} /></a>
        </Container>
    );
}