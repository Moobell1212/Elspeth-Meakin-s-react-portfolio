import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './repoProjectCardStyle.css';

export default function RepoProjectCard(props) {
    return (
        <Card className="repocard border-dark text-center">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.info}
                </Card.Text>
                <div id="card-bottom-half">
                    <Card.Text>
                        Created on: {props.created}
                    </Card.Text>
                    <Card.Text>
                        Last updated: {props.updated}
                    </Card.Text>
                    {!props.site ? (
                        <Button variant="primary" href={props.github} rel="noreferrer" target="_blank">Github</Button>
                    ) : (
                        <div>
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