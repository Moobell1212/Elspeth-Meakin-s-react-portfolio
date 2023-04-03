import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./highProjectCardStyle.css";

export default function HighlightedProjectCard(props) {
    return (
        <Card className="border-dark text-center highcard">
            {!props.gif ? (
                <Card.Img variant="top" src={props.image} className="card-img-top" alt={props.name} />
            ) : (
                <iframe src={props.gif} className="card-img-top" alt={props.name} title="project-video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
            }
            <Card.Body>
                <div>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="project-info">
                    {props.info}
                </Card.Text>
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
            </Card.Body>
        </Card>
    );
}
