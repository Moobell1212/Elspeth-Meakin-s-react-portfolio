import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import BannerBackground from "../../images/polygonal19.jpg";
import GitHubAPI from "../../utils/gitHubInfoAPI.js";
import BannerMessage from "./bannerMessage";
import "./bannerStyle.css";

export default function HomepageBanner() {

    const [profilePic, setProfilePic] = useState([]);

    useEffect(() => {
        GitHubAPI().then((response) => { setProfilePic(response.data.avatar_url) });
    }, []);

    return (
        <div id="banner" style={{ backgroundImage: `url(${BannerBackground})`, backgroundSize: "100%" }} >
            <Container id="banner-content">
                <div id="banner-text-img">
                    <div id="banner-text">
                        <BannerMessage style={{ display: "block" }} />
                        <div id="banner-name-sub" style={{ height: "100%", position: "relative" }}>
                            <h1 id="my-name">Elspeth Meakin</h1>
                            <h2 id="banner-subtitle">Welcome to my portfolio website!</h2>
                        </div>
                    </div>
                    <img src={profilePic} id="banner-img" className="img-responsive" alt="Elspeth Meakin" />
                </div>
                <div id="banner-caption"><a href="https://www.vecteezy.com/free-vector/banner-background" target="blank" >Banner Background Vectors by Vecteezy</a></div>
            </Container>
        </div>
    )
}