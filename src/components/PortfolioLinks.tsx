import {ReactElement} from 'react';
import '../styles/PortfolioLinks.css';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaFile} from 'react-icons/fa';
export default function PortfolioLinks():ReactElement {
    return (
        <div className={"Portfolio-links"}>
            <a href="https://www.linkedin.com/in/emil-nielsen-48b259266/" target="_blank" rel="noreferrer">
                <FaLinkedin/> <span>LinkedIn</span>
            </a>
            <a href="https://www.github.com/emilvn" target="_blank" rel="noreferrer">
                <FaGithub/> <span>Github</span>
            </a>
            <a href="/assets/documents/CV.pdf" target="_blank" rel="noreferrer">
                <FaFile/> <span>CV</span>
            </a>
        </div>
    );
}