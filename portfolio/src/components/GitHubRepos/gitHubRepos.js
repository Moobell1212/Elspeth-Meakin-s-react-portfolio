import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import RepoProjectCard from './repoProjectCard.js';
import RepoAPI from '../../utils/repoAPI.js';
import HighProjects from '../../utils/projects.json'

export default function GitHubProjects() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        RepoAPI().then((response) => { setRepos(response.data) })
    }, [])

    console.log(HighProjects)

    let highProjectTitles = [];
    HighProjects.forEach(function (obj) {
        highProjectTitles.push(obj.name.split(" ").join("-"))
    })

    console.log(highProjectTitles)

    

    return (
        <Container>
            <h2 style={{ margin: "50px 0px" }}>Here are my other repositories from Github:</h2>
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