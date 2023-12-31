import {ReactElement} from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout():ReactElement {
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
}