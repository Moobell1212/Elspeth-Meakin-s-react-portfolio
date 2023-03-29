import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "../components/Carousel";
import HomepageBanner from "../components/HomepageBanner/banner";

export default function Homepage() {
    return (
        <div>
            <HomepageBanner />
            <Container>
                <h2 style={{ marginTop: 50 }}>Former science content producer turned trainee front end developer extraordinaire. Currently taking part in a front end coding bootcamp whilst building my portfolio.</h2>
                <h2 style={{ marginTop: 200 }}>Put badge information and images here.</h2>
                <h3 style={{ marginTop: 200 }}>Information here about langauges and technologies known/used.</h3>
                <h3 style={{ marginTop: 200 }}>My pinned repositories on GitHub:</h3>
                <Carousel />
            </Container>
        </div>
    );
}