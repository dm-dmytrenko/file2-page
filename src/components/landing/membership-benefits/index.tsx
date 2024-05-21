import React from "react"
import { Heading4, Heading5, Paragraph } from "../../typo"

import './membership-benefits.scss'

const MembershipBenefits = () => {
    return (
        <React.Fragment>
            <div className="membership-benefits">
                <div className="container">
                    <div className="text-center">
                        <Heading4 className="font-podka">
                        MEMBERSHIP BENEFITS:
                        </Heading4>
                        <Heading5>
                            You will receive all the benefits from your membership:
                        </Heading5>
                    </div>
                    <div className="grid-row">
                        <div>
                            <img src="/assets/images/member-benefits.png" />
                        </div>
                        <div>
                            <Paragraph>
                                Regular Updates of the following:
                            </Paragraph>
                            <ul>
                                <li>
                                    Lists of CROs by state and country
                                </li>
                                <li>
                                Lists of VCT and non VCT CROs
                                </li>
                                <li>
                                Specifics of each CRO and how they compensate
                                </li>
                                <li>
                                New study notifications
                                </li>
                                <li>
                                Details of each study including qualifications & all compensation each provides (Study Payment, Screening Payment, Travel Reimbursements, Referral Payment)
                                </li>
                                <li>
                                    Service providers near each CRO including transportation & accommodations
                                </li>
                                <li>
                                    Important notes and notifications of how certain CROs operate so you know in advance
                                </li>
                                <li>
                                    Requirements for payments with each
                                </li>
                                <li>
                                    20% discount on placement of any ads CRO
                                </li>
                                <li>
                                    Split sharing of referral fees 50/50 with you
                                </li>
                                <li>
                                    Post a study that isn't listed. You will receive referral fee split with individuals that screen for that study
                                </li>
                                <li>
                                    Other useful information as it becomes available
                                </li>
                                <li>
                                    Post your service after verified approval
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MembershipBenefits