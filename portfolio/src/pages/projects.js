import React from "react";
import Container from 'react-bootstrap/Container';
import HighlightedProjects from '../components/HighlightedProjects/highProjects.js'
import GitHubProjects from "../components/GitHubRepos/gitHubRepos";

export default function Projects() {
    return (
        <div>
            <Container>
                <HighlightedProjects />
                <GitHubProjects  />
            </Container>
        </div>
    )
}
