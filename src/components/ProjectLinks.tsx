import {ReactElement} from "react";
import {TiWeatherPartlySunny} from "react-icons/ti";
import "../styles/ProjectLinks.css";
import {MdOutlineLibraryMusic} from "react-icons/md";
import {FaPersonSwimming} from "react-icons/fa6";
import {GrEmoji} from "react-icons/gr";

export default function ProjectLinks():ReactElement {
    return (
        <div className={"Project-links"}>
            <div className={"Project-link-div"}>
                <a href="https://emilvn.github.io/weather-app" target="_blank" rel="noreferrer">
                    <TiWeatherPartlySunny/><span>Weather App</span>
                </a>
                <div className={"Project-link-description"}>
                    <p>Made with React and Typescript. Uses the OpenWeatherMap API to get weather data</p>
                </div>
            </div>
            <div className={"Project-link-div"}>
                <a href="https://emilvn.github.io/musicbase-frontend-react/" target="_blank" rel="noreferrer">
                    <MdOutlineLibraryMusic/><span>Musicbase</span>
                </a>
                <div className={"Project-link-description"}>
                    <p>Frontend made with React and Typescript.
                    API made with NodeJS and express, hosted on Azure.
                    Database made with MySQL, hosted on Azure.</p>
                </div>
            </div>
            <div className={"Project-link-div"}>
                <a href="https://emilvn.github.io/delfinen/" target="_blank" rel="noreferrer">
                    <FaPersonSwimming/><span>Swim-club</span>
                </a>
                <div className={"Project-link-description"}>
                    <p>Admin page for a swim club. Frontend made with vanilla JS/HTML/CSS. Backend implemented on Firebase using Realtime Database.</p>
                </div>
            </div>
            <div className={"Project-link-div"}>
                <a href="https://tweemoji-two.vercel.app/" target="_blank" rel="noreferrer">
                    <GrEmoji/> <span>Tweemoji</span>
                </a>
                <div className={"Project-link-description"}>
                    <p>Emoji only Twitter clone I am working on. Web app hosted on Vercel, made using the
                        <a href={"https://create.t3.gg/"} className="inline-link">T3</a>
                        Next.js stack. Database hosted on Planetscale, made using Prisma ORM and MySQL.</p>
                </div>
            </div>
        </div>
    );
}
