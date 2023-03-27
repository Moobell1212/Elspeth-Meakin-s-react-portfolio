import React from "react";
import Container from 'react-bootstrap/Container';
import HighlightedProjectCard from './highProjectCard.js';
import Projects from '../../utils/projects.json';

export default function HighlightedProjects() {
    return (
        <Container>
            {/* <h1>Here are my current projects:</h1> */}
            <h1 style={{ margin: "50px 0px" }}>Here are are some of my past projects:</h1>
            <div class="row justify-content-around">
                {Projects.map(f => <HighlightedProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    gif={f.gif}
                    info={f.info}
                    site={f.site}
                    github={f.github}
                />)}
            </div>
        </Container>
    )
}