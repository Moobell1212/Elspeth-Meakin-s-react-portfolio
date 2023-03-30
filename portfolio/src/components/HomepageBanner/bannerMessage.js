import React, { useEffect, useState } from "react";

const message = "Hello, my name is";

export default function bannerMessage() {
    const Typer = ({ speed , children }) => {
        const [msg, setmsg] = useState(0);
        useEffect(() => {
            const timer = window.setInterval(() => setmsg((v) => v + 1), speed);
            return () => window.clearInterval(timer);
        });

        return <div>{children.substr(0, msg)}</div>;
    };
    return (
        <div>
            <p style={{ fontSize: 20, fontWeight: "bold"}}><Typer speed={200} children={message} ></Typer></p>
        </div>
    );
};