import React from 'react'
import './Portfolio.css'
import PortfolioHeader from "../PortfolioHeader/PortfolioHeader.tsx";
import PortfolioLinks from "../PortfolioLinks/PortfolioLinks.tsx";

export default function Portfolio():React.ReactElement {

  return (
    <div className={"Portfolio"}>
        <PortfolioHeader />
        <PortfolioLinks />
    </div>
  )
}