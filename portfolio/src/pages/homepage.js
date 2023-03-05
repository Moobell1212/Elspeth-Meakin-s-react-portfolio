import React from "react";
import Avatar from "../images/1096_generated.jpg";
import Container from 'react-bootstrap/Container';

function Homepage(){
    return (
        <div class ="info">
        <Container>
        <h1>This is my Name: Elspeth</h1>
        <img src={Avatar} alt="profile picture" style={{ width: 400 }}/>
        <h1>My brand Statement</h1>
        <h1>Indication that this is my portfolio site</h1>
        </Container>
        </div>
    );
}

export default Homepage;