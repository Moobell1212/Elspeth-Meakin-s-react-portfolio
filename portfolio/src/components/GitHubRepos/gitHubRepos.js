import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import RepoProjectCard from './repoProjectCard.js';
import RepoAPI from '../../utils/repoAPI.js';
import HighProjects from '../../utils/projects.json';
import Button from "react-bootstrap/esm/Button.js";

export default function GitHubProjects() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        RepoAPI().then((response) => { setRepos(response.data) })
    }, [])

    let highProjectTitles = [];
    HighProjects.forEach(function (obj) {
        highProjectTitles.push(obj.name.split(" ").join("-"))
    })

    repos.filter(x => x.name !== "Elspeth-Meakin-s-Bootstrap-Portfolio")

    
    function upDatedFilter() {
        console.log(`Filter by updated`)
        // const updated = (a, b) => {
        //     if (a.updated_at > b.updated_at) {
        //         return -1;
        //     }
        //     if (a.updated_at < b.updated_at) {
        //         return 1;
        //     }
        //     return 0;
        // }
        // repos.sort(updated)
    }

    function createdFilter() {
        console.log(`Filter by created`)
        // const created = (a, b) => {
        //     if (a.created_at > b.created_at) {
        //         return -1;
        //     }
        //     if (a.created_at < b.created_at) {
        //         return 1;
        //     }
        //     return 0;
        // }
        // repos.sort(created)
    }

    return (
        <Container>
            <h2 style={{ margin: "50px 0px" }}>Here are my other repositories from Github:</h2>
            <div className="sorting-buttons" style={{ marginBottom: 50 }}>
                <Button onClick={upDatedFilter}>Sort by Date Created</Button>
                <Button onClick={createdFilter}>Sort by Date Updated</Button>
            </div>
            <div class="row justify-content-around">
                {repos.map(f => <RepoProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    info={f.description}
                    site={f.homepage}
                    github={f.svn_url}
                    created={f.created_at.slice(0, 10)}
                    updated={f.updated_at.slice(0, 10)}
                />)}
            </div>
        </Container>
    )
}