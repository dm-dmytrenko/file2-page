import React from "react"
import { Heading4, Paragraph } from "../../typo"

import './money-back.scss'

const MoneyBack = () => {
    return (
        <React.Fragment>
            <div className="money-back-section">
                <div className="container">
                    <div className="grid-row">
                        <div className="col">
                            <Heading4 className="font-podka">OUR 100% MONEY BACK GUARANTEE</Heading4>
                            <Paragraph>
                                Upon selecting and joining with your preferred membership option, you'll gain access to comprehensive details and shortcuts to kickstart a stable and legitimate income stream. Should any doubts arise for any reason, rest assured as we offer a 100% refund guarantee. Whether you decide volunteering for payment isn’t for you, or if you find the opportunity unprofitable, we've got you covered. Interestingly, profitability from this venture isn’t solely dependent on volunteering; yes, it’s possible to earn without ever volunteering. This opportunity harbors many pleasant surprises for you. While the bulk of your profits will emanate from volunteering, we'll guide you on how to augment your earnings through other simple, actionable steps. There's a wealth of knowledge to gain and benefit from in navigating this business venture!
                            </Paragraph>
                        </div>
                        <div className="col">
                            <div className="img">
                                <img src="/assets/images/gurantee-icon.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MoneyBack