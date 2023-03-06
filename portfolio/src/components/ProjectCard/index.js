import React from "react";

function ProjectCard(props) {
    return (
        <div class="card border-dark text-center">
            <img src={props.image} class="card-img-top" alt={props.name} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.info}</p>
                    <a href={props.site} target="_blank" class="btn btn-primary">Website</a>
                    <a href={props.github} target="_blank" class="btn btn-primary">Github</a>
                </div>
        </div>
    );
}

export default ProjectCard;