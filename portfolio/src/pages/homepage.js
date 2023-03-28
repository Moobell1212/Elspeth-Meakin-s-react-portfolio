import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/Carousel";
import GitHubAPI from "../utils/gitHubInfoAPI.js";
import AvatarBanner from "../images/polygonal19.jpg";

export default function Homepage() {

    const [profilePic, setProfilePic] = useState([]);

    useEffect(() => {
        GitHubAPI().then((response) => { setProfilePic(response.data.avatar_url) })
    }, [])

    return (
        <div className="info" style={{ minHeight: "calc(100vh - 185px)" }}>
            <div className="avatarbanner" style={{ backgroundImage: `url(${AvatarBanner})`, backgroundSize: "100%", padding: "80px 0px", position: "relative" }}>
                <Container>
                    <div id="avatarbannercontent" style={{ display: "flex", height: "calc(100vh - 240px)" }}>
                        <h1 style={{ textAlign: "center", margin: "auto", padding: "0 10%", minFontSize: 70 }}>Welcome to my portfolio website!</h1>
                        <img src={profilePic} className="img-responsive" alt="Elspeth Meakin" style={{ margin: "auto", width: "20%", boxShadow: "0 3px 6px #000, 0 3px 6px #000", borderRadius: "50%", alignContent: "center" }} />
                    </div>
                    <div class="bannercaption" style={{ fontSize: 8, position: "absolute", bottom: 10, left: 10 }}><a href="https://www.vecteezy.com/free-vector/banner-background" target="blank" >Banner Background Vectors by Vecteezy</a></div>
                </Container>
            </div>
            <Container>
                <h2 style={{ marginTop: 50 }}>Former science content producer turned trainee front end developer extraordinaire. Currently taking part in a front end coding bootcamp whilst building my portfolio.</h2>
                <h2 style={{ marginTop: 200 }}>Put badge information and images here.</h2>
                <h3 style={{ marginTop: 200 }}>Information here about langauges and technologies known/used.</h3>
                <h3 style={{ marginTop: 200  }}>My pinned repositories on GitHub:</h3>
                <Carousel />
            </Container>
        </div>
    );
}