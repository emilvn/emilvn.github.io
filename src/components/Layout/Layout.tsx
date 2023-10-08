import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout():React.ReactElement {
    return (
        <>
            <nav className={"Layout"}>
                    <h2>
                        <Link to="/">Home</Link>
                    </h2>
                    <h2>
                        <Link to="/projects">Projects</Link>
                    </h2>
            </nav>

            <Outlet />
        </>
    )
};