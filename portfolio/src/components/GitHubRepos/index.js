import React from "react";
import Container from 'react-bootstrap/Container';
import ProjectCard from '../ProjectCard';

export default function GitHubProjects() {
    return (
        <Container>
            <h1 style={{ marginBottom: "20px" }}>Here are my other repositories from Github:</h1>
            {/* <div class="row justify-content-around">
                {Projects.map(f => <ProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    gif={f.gif}
                    site={f.site}
                    github={f.github}
                    info={f.info}
                />)}
            </div> */}
        </Container>
    )
}