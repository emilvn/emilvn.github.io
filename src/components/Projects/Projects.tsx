import React from 'react';
import './Projects.css';
import ProjectLinks from "../ProjectLinks/ProjectLinks.tsx";
export default function Projects():React.ReactElement{
    return (
        <div className={"Projects"}>
            <h1>Projects</h1>
            <ProjectLinks />
        </div>
    );
}