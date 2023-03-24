import React from "react";
import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/ProjectCard';
import ProjectList from '../projects.json'

export default function Projects() {
    return (
        <div>
            <Container>
                {/* <h1>Here are my current projects:</h1> */}
                <h1 style={{ marginBottom: "20px" }}>Here are my past projects:</h1>
                <div class="row justify-content-around">
                {ProjectList.map(f => <ProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    gif={f.gif}
                    site={f.site}
                    github={f.github}
                    info={f.info}
                />)}
                </div>
            </Container>
        </div>
    )
}
