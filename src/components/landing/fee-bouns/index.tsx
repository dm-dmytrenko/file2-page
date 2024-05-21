import React from "react"
import { Heading3, Heading5, Paragraph } from "../../typo"

import './fee-bouns.scss'

const FeeBouns = () => {
    return (
        <React.Fragment>
            <div className="fee-bouns-section">
                <div className="container">
                    <div className="grid-row">
                        <div>
                            <Heading3 className="font-podka">FREE BONUS #1</Heading3>
                            <Heading5>ADDITIONAL OPPORTUNITY FOR PAY IN ANOTHER INDUSTRY</Heading5>
                            <Paragraph>
                                Furthermore, as an exclusive bonus, we are excited to offer you an additional opportunity at no extra charge. This venture is on a swift ascent, paralleling the rapid advancement of Artificial Intelligence (AI). As a gesture of gratitude for joining our membership, we will provide thorough details on this method aimed at increasing your monthly earnings in an entirely different, yet flourishing industry. As AI continues to reshape our world subtly yet significantly, this industry is forecasted to thrive accordingly. Before long, we expect to see transformative changes making waves in our daily lives, and by being involved, you'll be among a privileged few venturing into volunteer roles within this emerging sector. Take advantage of being an early adopter and secure a consistent monthly income stream with minimal effort and time commitment on your part.
                            </Paragraph>
                        </div>
                        <div>
                            <img src="/assets/images/fee-bouns.png" />
                        </div>
                    </div>
                    <div>
                        <Heading3 className="font-podka">FREE BONUS #2</Heading3>
                        <Heading5>YOUR MEMBERSHIP IS A GATEWAY TO UNFORESEEN ADVANTAGES</Heading5>
                        <Paragraph>
                            A membership with us unlocks a realm of benefits beyond your imagination. As a valued member, we remain committed to continuously sharing and informing you about legitimate avenues to elevate your income as they emerge. Rest assured, these opportunities are meticulously vetted based on our stringent criteria: they require minimal initial investment, are easy to embark upon and transparently outline the payment structure. We are enthralled by the numerous developments on the horizon, especially as our world evolves with the advent of Artificial Intelligence. As these changes transpire, fresh effortless and legitimate opportunities arise and you will be among the first to be in the know.
                        </Paragraph>
                        <Paragraph>
                            Our mission is to present you with genuine opportunities for additional income sources, not just a compilation of potential methods requiring tireless efforts to see financial growth. We aim to introduce you to legitimate sources of income that ensure payment upon the fulfillment of the contract terms. The market is saturated with deceptive schemes proclaiming immense wealth in exchange for significant investments. Many individuals get enticed, only to realize later that not only is the payoff elusive, but the journey is arduous, leading to a loss of investment. Our membership aims to divert you from such misleading paths and lead you into a domain of authentic, rewarding opportunities.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FeeBouns