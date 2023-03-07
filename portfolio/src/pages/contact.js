import React from "react";
import Container from 'react-bootstrap/Container';
import Avatar from "../images/1096_generated.jpg";
import CV from "../downloads/Untitled.pdf"

function Contact(){
    return (
        <div style={{ minHeight: "calc(100vh - 185px)" }}>
        <Container>
        <h1>Contact me!</h1>
        <h5>Email: <a href = "mailto: myemail@hotmail.co.uk">myemail@hotmail.co.uk</a></h5>
        <h5>GitHub: <a href="https://github.com/Moobell1212" target="_blank">Moobell1212</a></h5>
        <h5>LinkedIn: <a href="https://www.linkedin.com/in/elspeth-meakin-7289b3126/" target="_blank">Elspeth Meakin</a></h5>
        <h5>My CV:</h5>
        <a href={CV} download><img src={Avatar} alt="Picture CV" width="500px"/></a>
        </Container>
        </div>
    );
}

export default Contact;