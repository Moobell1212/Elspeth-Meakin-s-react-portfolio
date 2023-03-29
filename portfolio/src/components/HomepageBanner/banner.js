import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import BannerBackground from "../../images/polygonal19.jpg";
import GitHubAPI from "../../utils/gitHubInfoAPI.js";
import BannerMessage from "./bannerMessage";

export default function HomepageBanner() {

    const [profilePic, setProfilePic] = useState([]);

    useEffect(() => {
        GitHubAPI().then((response) => { setProfilePic(response.data.avatar_url) });
    }, [])

    return (
        <div className="avatarbanner" style={{ backgroundImage: `url(${BannerBackground})`, backgroundSize: "100%", position: "relative", height: "calc(100vh - 80px)" }}>
            <Container id="avatarbannercontent" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", height: "100%" }}>
                <BannerMessage />
                <h1 style={{}}>Elspeth Meakin</h1>
                <h2 style={{}}>Welcome to my portfolio website!</h2>
                <img src={profilePic} className="img-responsive" alt="Elspeth Meakin" style={{ margin: "auto", width: 200, boxShadow: "0 3px 6px #000, 0 3px 6px #000", borderRadius: "50%", alignContent: "center" }} />
                <div class="bannercaption" style={{ fontSize: 8, position: "absolute", bottom: 10, left: 10 }}><a href="https://www.vecteezy.com/free-vector/banner-background" target="blank" >Banner Background Vectors by Vecteezy</a></div>
            </Container>
        </div>
    )
}