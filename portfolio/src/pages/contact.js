import React from "react";
import Container from 'react-bootstrap/Container';

function Contact(){
    return (
        <div>
        <Container>
        <h1>Contact me!</h1>
        <h5>Email: <a href = "mailto: myemail@hotmail.co.uk">myemail@hotmail.co.uk</a></h5>
        <h5>My <a href="myCV">CV</a></h5>
        <h5>GitHub: <a href="https://github.com/Moobell1212" target="_blank">Moobell1212</a></h5>
        <h5>LinkedIn: <a href="https://www.linkedin.com/in/elspeth-meakin-7289b3126/" target="_blank">Elspeth Meakin</a></h5>
        </Container>
        </div>
    );
}

export default Contact;