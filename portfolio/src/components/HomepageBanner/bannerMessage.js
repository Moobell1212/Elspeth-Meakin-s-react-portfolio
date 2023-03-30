import React, { useEffect, useState } from "react";

const message = "Hello, my name is";

export default function bannerMessage() {
    const Typer = ({ speed , children }) => {
        const [message, setMessage] = useState(0);
        useEffect(() => {
            const timer = window.setInterval(() => setMessage((letter) => letter + 1), speed);
            return () => window.clearInterval(timer);
        });

        return <div>{children.substr(0, message)}</div>;
    };
    return (
        <div>
            <p style={{ fontSize: 20, fontWeight: "bold"}}><Typer speed={170} children={message} ></Typer></p>
        </div>
    );
};