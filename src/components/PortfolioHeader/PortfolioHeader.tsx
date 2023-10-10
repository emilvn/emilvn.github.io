import {ReactElement} from "react";
import "./PortfolioHeader.css";

export default function PortfolioHeader():ReactElement{
    return (
        <header className={"Portfolio-header"}>
            <img src="/assets/images/328489084_480124824329170_5589001845441032345_n.jpg" alt=""/>
            <h1>Emil Vennervald Nielsen</h1>
        </header>
    );
}