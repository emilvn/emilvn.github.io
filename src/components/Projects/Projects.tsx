import {ReactElement} from 'react';
import './Projects.css';
import ProjectLinks from "../ProjectLinks/ProjectLinks.tsx";
import {FaGithub} from "react-icons/fa";

export default function Projects():ReactElement{
    return (
        <div className={"Projects"}>
            <h1>
                Projects
                <a href="https://www.github.com/emilvn" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>
            </h1>

            <ProjectLinks />
        </div>
    );
}