"use client"
import React from "react"
import HeaderAfterLogin from "../../components/header-after-login"
import { Heading3, Paragraph } from "../../components/typo"

import './location.scss'

const LocationContent = () => {

    return (
        <React.Fragment>
            <HeaderAfterLogin PageTile={'Pfizer in New Haven, CT'} closeIcon={true} />
            <main className="location-content">
                <div className="container">
                    <Heading3 className="page-title mb-4">Transportation Notes:</Heading3>
                    <ul>
                        <li>
                            You can fly into several airports. JFK, EWR, LGA and small airport in New Haven with Avelo Air but it is limited. Avelo Air does not fly everywhere so you probably have to use one of the 3 main airports. However, if they fly where you are located, it is usually very cost effective.
                        </li>
                        <li>
                            Closest main large airport to New Haven of the 3 is JFK and LGA. You can take Amtrak to New Haven from EWR if your going during normal hours. This will not work after hours. The first/earliest train leaving is highly unlikely to be cancelled but the later trains have cancelled at times, with exception of dinner time hours, if not enough people scheduled. You can also check on status of train being cancelled. Call 800# directly to get best details on stops along route, most likely trains to not be cancelled.
                        </li>
                        <li>
                            Avelo Air:
                            <ul>
                                <li>Phone:</li>
                                <li>Aveloair.com</li>
                            </ul>
                        </li>     
                        <li>
                            Amtrak train
                            <ul>
                                <li>
                                    (Calling 800# is best, if you can't see all options or stops on app. Web site does not show all stops)
                                </li>
                            </ul>
                        </li>
                    </ul>

                    
                    <Heading3 className="page-title mb-4">Accommodation Notes:</Heading3>
                    <ul>
                        <li>
                            You can fly into several airports. JFK, EWR, LGA and small airport in New Haven with Avelo Air but it is limited. Avelo Air does not fly everywhere so you probably have to use one of the 3 main airports. However, if they fly where you are located, it is usually very cost effective.
                        </li>
                        <li>
                            Closest main large airport to New Haven of the 3 is JFK and LGA. You can take Amtrak to New Haven from EWR if your going during normal hours. This will not work after hours. The first/earliest train leaving is highly unlikely to be cancelled but the later trains have cancelled at times, with exception of dinner time hours, if not enough people scheduled. You can also check on status of train being cancelled. Call 800# directly to get best details on stops along route, most likely trains to not be cancelled.
                        </li>
                        <li>
                            Avelo Air:
                            <ul>
                                <li>Phone:</li>
                                <li>Aveloair.com</li>
                            </ul>
                        </li>     
                        <li>
                            Amtrak train
                            <ul>
                                <li>
                                    (Calling 800# is best, if you can't see all options or stops on app. Web site does not show all stops)
                                </li>
                            </ul>
                        </li>
                    </ul>
                   
                </div>
            </main>
        </React.Fragment>
    )
}

export default LocationContent