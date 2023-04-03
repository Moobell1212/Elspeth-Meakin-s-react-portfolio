import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import RepoProjectCard from './repoProjectCard.js';
import RepoAPI from '../../utils/repoAPI.js';
import Button from "react-bootstrap/esm/Button.js";

{/* import HighProjects from '../../utils/projects.json'; */ }

export default function GitHubProjects() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        RepoAPI().then((response) => { setRepos(response.data) })
    }, []);

    {/* let highProjectTitles = [];
    HighProjects.forEach(function (obj) {
        highProjectTitles.push(obj.name.split(" ").join("-"))
    });

    const removePortfolio = () => {
        setRepos(current => {
            return current.filter(repo => repo.name !== "Elspeth-Meakin-s-react-portfolio") })
    }
    */}

    const sortRepos = (sortBy) => {
        const sortFun = (a, b) => {
            if (a[sortBy] > b[sortBy]) {
                return -1;
            }
            if (a[sortBy] < b[sortBy]) {
                return 1;
            }
            return 0;
        }
        console.log(`Filter by pushed`);
        setRepos([...repos.sort(sortFun)])
    };

    return (
        <Container>
            <h2 style={{ margin: "50px 0px" }}>Here are my repositories from Github:</h2>
            <div className="sorting-buttons" style={{ marginBottom: 50 }}>
                <Button onClick={() => sortRepos("created_at")} style={{ margin: "10px 10px" }}>Sort by Date Created</Button>
                <Button onClick={() => sortRepos("updated_at")} style={{ margin: "10px 10px" }}>Sort by Date Updated</Button>
                <Button onClick={() => sortRepos("pushed_at")} style={{ margin: "10px 10px" }}>Sort by Last Pushed</Button>
            </div>
            <div class="row justify-content-around">
                {repos.map(f => <RepoProjectCard key={f.id}
                    id={f.id}
                    name={f.name}
                    info={f.description}
                    site={f.homepage}
                    github={f.svn_url}
                    created={f.created_at.slice(0, 10)}
                    pushed={f.pushed_at.slice(0, 10)}
                    updated={f.created_at.slice(0, 10)}
                />)}
            </div>
        </Container>
    )
}