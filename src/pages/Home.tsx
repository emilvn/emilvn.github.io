import {ReactElement} from 'react'
import '../styles/Home.css'
import PortfolioHeader from "../components/PortfolioHeader.tsx";
import PortfolioLinks from "../components/PortfolioLinks.tsx";

export default function Home():ReactElement {

  return (
    <div className={"Portfolio"}>
        <PortfolioHeader />
        <PortfolioLinks />
    </div>
  )
}