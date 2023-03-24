import React from "react";
import Avatar from "../images/1096_generated.jpg";
import Container from 'react-bootstrap/Container';

export default function Homepage(){
    return (
        <div className ="info" style={{ minHeight: "calc(100vh - 185px)" }}>
        <Container>
        <h1>Hello! Welcome to my portfolio website!</h1>
        <img src={Avatar} alt="Elspeth Meakin" style={{ width: 400, boxShadow: "0 3px 6px #999, 0 3px 6px #999" }} />
        <h2>Former science content producer turned trainee front end developer extraordinaire. Currently taking part in a front end coding bootcamp whilst building my portfolio.</h2>
        <h3>If you have any questions about my past or current projects please contact me using the information on my contact page.</h3>
        </Container>
        </div>
    );
}
