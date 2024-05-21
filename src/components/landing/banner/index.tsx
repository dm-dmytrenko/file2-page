import { Heading1, Paragraph } from "../../typo"
import React from "react"


import './banner.scss'

const HeroBanner = () => {
    return (
        <React.Fragment>
            <div className="banner-holder">
                <div className="container-sm">
                    <div className="content-holder">
                        <Heading1>V<span>4</span>P</Heading1>
                        <Paragraph>Volunteer for pay</Paragraph>
                    </div>
                    <div className="hero-content-img" style={{backgroundImage: 'url(/assets/images/mockup.png)'}}></div>
                </div>
                <div className="banner-layer"></div>
                <div className="graph-icon-1">
                    <img src="/assets/images/hero-banner-before.svg"  alt="icon"/>
                </div>
                <div className="graph-icon-2">
                    <img src="/assets/images/hero-banner-after.svg"  alt="icon"/>
                </div>
                <div className="graph-icon-3">
                    <img src="/assets/icons/Dots.svg"  alt="icon"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBanner