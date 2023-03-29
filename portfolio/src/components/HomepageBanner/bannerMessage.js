import React, { useEffect, useState } from "react";

const message = "Hello, my name is";

export default function bannerMessage() {
    const Typer = ({ speed , children }) => {
        const [idx, setidx] = useState(0);
        useEffect(() => {
            const timer = window.setInterval(() => setidx((v) => v + 1), speed);
            return () => window.clearInterval(timer);
        });

        return <div>{children.substr(0, idx)}</div>;
    };
    return (
        <div>
            <Typer speed={250} children={message}></Typer>
        </div>
    );
};