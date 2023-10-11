import {ReactElement} from 'react'
import '../../styles/Portfolio.css'
import PortfolioHeader from "../PortfolioHeader/PortfolioHeader.tsx";
import PortfolioLinks from "../PortfolioLinks/PortfolioLinks.tsx";

export default function Portfolio():ReactElement {

  return (
    <div className={"Portfolio"}>
        <PortfolioHeader />
        <PortfolioLinks />
    </div>
  )
}