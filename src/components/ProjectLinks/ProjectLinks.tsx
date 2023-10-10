import {ReactElement} from "react";
import {TiWeatherPartlySunny} from "react-icons/ti";
import "./ProjectLinks.css";
import {MdOutlineLibraryMusic} from "react-icons/md";
import {FaPersonSwimming} from "react-icons/fa6";

export default function ProjectLinks():ReactElement {
    return (
        <div className={"Project-links"}>
            <a href="https://emilvn.github.io/weather-app" target="_blank" rel="noreferrer">
                <TiWeatherPartlySunny/><span>Weather App</span>
            </a>
            <a href="https://emilvn.github.io/musicbase-frontend/" target="_blank" rel="noreferrer">
                <MdOutlineLibraryMusic/><span>Musicbase</span>
            </a>
            <a href="https://emilvn.github.io/delfinen/">
                <FaPersonSwimming/><span>Swimming club</span>
            </a>
        </div>
    );
}
