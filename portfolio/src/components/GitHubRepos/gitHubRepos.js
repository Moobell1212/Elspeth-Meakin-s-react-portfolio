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
    }, []);

    let highProjectTitles = [];
    HighProjects.forEach(function (obj) {
        highProjectTitles.push(obj.name.split(" ").join("-"))
    });

    // const removePortfolio = () => {
    //     const removeTitle = (array) => {
    //         array.filter(x => x.node_id === "R_kgDOJE8_rA")
    //     }
    //     setRepos(removeTitle(repos))
    // }

    // removePortfolio()

    const pushedFilter = () => {
        const pushed = (a, b) => {
            if (a.pushed_at > b.pushed_at) {
                return -1;
            }
            if (a.pushed_at < b.pushed_at) {
                return 1;
            }
            return 0;
        }
        console.log(`Filter by pushed`);
        setRepos(repos.sort(pushed))
    };

    const createdFilter = () => {
        const created = (a, b) => {
            if (a.created_at > b.created_at) {
                return -1;
            }
            if (a.created_at < b.created_at) {
                return 1;
            }
            return 0;
        }
        console.log(`Filter by created`);
        setRepos(repos.sort(created))
    };

    const updatedFilter = () => {
        const updated = (a, b) => {
            if (a.updated_at > b.updated_at) {
                return -1;
            }
            if (a.updated_at < b.updated_at) {
                return 1;
            }
            return 0;
        }
        console.log(`Filter by updated`);
        setRepos(repos.sort(updated))
    };

    console.log(repos);

    const renderRepos = () => {
        return (<div class="row justify-content-around">
            {repos.map(f => <RepoProjectCard key={f.id}
                id={f.id}
                name={f.name}
                info={f.description}
                site={f.homepage}
                github={f.svn_url}
                created={f.created_at.slice(0, 10)}
                pushed={f.pushed_at.slice(0, 10)}
            />)}
        </div>
        )
    };

    return (
        <Container>
            <h2 style={{ margin: "50px 0px" }}>Here are my other repositories from Github:</h2>
            <div className="sorting-buttons" style={{ marginBottom: 50 }}>
                <Button onClick={createdFilter} style={{ margin: "10px 10px" }}>Sort by Date Created</Button>
                <Button onClick={updatedFilter} style={{ margin: "10px 10px" }}>Sort by Date Updated</Button>
                <Button onClick={pushedFilter} style={{ margin: "10px 10px" }}>Sort by Last Pushed</Button>
            </div>
            {renderRepos()}
        </Container>
    )
}