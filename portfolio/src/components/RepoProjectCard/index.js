import React from "react";

export default function HighlightedProjectCard(props) {
    return (
        <div class="card border-dark text-center">
            <div class="card-body w-40">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.info}</p>
                {!props.site ? (
                    <a href={props.github} rel="noreferrer" target="_blank" className="btn btn-primary">Github</a>
                ) : (
                    <div><a href={props.github} rel="noreferrer" target="_blank" className="btn btn-primary">Github</a>
                        <a href={props.site} rel="noreferrer" target="_blank" className="btn btn-primary">Website</a>
                    </div>)
                }
            </div>
        </div>
    );
}