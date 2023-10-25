import {ReactElement} from "react";
import "../styles/PortfolioHeader.css";

export default function PortfolioHeader():ReactElement{
    return (
        <header className={"Portfolio-header"}>
            <img src="/assets/images/me.jpg" alt=""/>
            <h1>Emil Vennervald Nielsen</h1>
        </header>
    );
}