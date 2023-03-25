import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import RepoProjectCard from '../RepoProjectCard';
import RepoAPI from '../../utils/repoAPI.js'

export default function GitHubProjects() {

    const [repos, setRepos] = useState([]);

    useEffect(() => { RepoAPI().then((response) => {setRepos(response.data)})
}, [])

    return (
        <Container>
            <h1 style={{ marginBottom: "20px" }}>Here are my other repositories from Github:</h1>
            <div class="row justify-content-around">
                {repos.map(f => <RepoProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    info={f.description}
                    site={f.homepage}
                    github={f.svn_url}
                />)}
            </div>

        </Container>
    )

}