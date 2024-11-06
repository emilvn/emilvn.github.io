import {ReactElement} from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout():ReactElement {
    return (
        <>
            <Outlet />
        </>
    )
}
