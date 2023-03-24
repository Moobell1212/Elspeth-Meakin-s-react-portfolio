import React from "react";
import Container from 'react-bootstrap/Container';
import HighlightedProjects from '../components/HighlightedProjects'
import GitHubProjects from "../components/GitHubRepos";


export default function Projects() {
    return (
        <div>
            <Container>
                <HighlightedProjects />
                <GitHubProjects />
            </Container>
        </div>
    )
}
