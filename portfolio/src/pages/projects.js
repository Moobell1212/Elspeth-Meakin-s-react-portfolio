import React from "react";
import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/ProjectCard';
import ProjectList from '../projects.json'

function Projects() {
    return (
        <div>
            <Container>
                <h1>Here are my past projects:</h1>
                {ProjectList.map(f => <ProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    gif={f.gif}
                    site={f.site}
                    github={f.github}
                    info={f.info}
                />)}
            </Container>
        </div>
    )
}

export default Projects;