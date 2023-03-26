import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/Carousel";
import GitHubAPI from "../utils/gitHubInfoAPI.js";

export default function Homepage(){

    const [profilePic, setProfilePic] = useState([]);

    useEffect(() => { GitHubAPI().then((response) => {setProfilePic(response.data.avatar_url)})
}, [])

    return (
        <div className ="info" style={{ minHeight: "calc(100vh - 185px)" }}>
        <Container>
        <h1 style={{ marginBottom: 50 }}>Hello! Welcome to my portfolio website!</h1>
        <img src={profilePic} alt="Elspeth Meakin" style={{ marginBottom: 50, width: 200, boxShadow: "0 3px 6px #999, 0 3px 6px #999", borderRadius: "50%", }} />
        <h2 style={{ marginBottom: 50 }}>Former science content producer turned trainee front end developer extraordinaire. Currently taking part in a front end coding bootcamp whilst building my portfolio.</h2>
        <h3 style={{ marginBottom: 50 }}>If you have any questions about my past or current projects please contact me using the information on my contact page.</h3>
        <Carousel />
        </Container>
        </div>
    );
}