import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './repoProjectCardStyle.css';

export default function RepoProjectCard(props) {
    return (
        <Card className="repocard border-dark text-center">
            <Card.Body>
                <Card.Title className="repo-card-title">{props.name}</Card.Title>
                <Card.Text className="project-info">
                    {props.info}
                </Card.Text>
                <div>
                    <div className="repo-dates">
                        <div>
                            <Card.Text className="date">
                                Created on:
                            </Card.Text>
                            <Card.Text className="date">
                                {props.created}
                            </Card.Text>
                        </div>
                        <div>
                            <Card.Text className="date">
                                Last pushed:
                            </Card.Text>
                            <Card.Text className="date">
                                {props.pushed}
                            </Card.Text>
                        </div>
                        
                    </div>
                    {!props.site ? (
                        <div className="highlighted-buttons">
                            <Button variant="primary" href={props.github} rel="noreferrer" target="_blank">Github</Button>
                        </div>
                    ) : (
                        <div className="highlighted-buttons">
                            <Button variant="primary" href={props.github} rel="noreferrer" target="_blank">Github</Button>
                            <Button variant="primary" href={props.site} rel="noreferrer" target="_blank">Website</Button>
                        </div>
                    )
                    }
                </div>
            </Card.Body>
        </Card>
    );
}