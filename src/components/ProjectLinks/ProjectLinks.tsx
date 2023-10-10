import {ReactElement} from "react";
import {TiWeatherPartlySunny} from "react-icons/ti";
import "./ProjectLinks.css";

export default function ProjectLinks():ReactElement {
    return (
        <div className={"Project-links"}>
            <a href="https://emilvn.github.io/weather-app" target="_blank" rel="noreferrer">
                <TiWeatherPartlySunny/><span>Weather App</span>
            </a>
        </div>
    );
}
