import React from "react"

import './volunteer.scss'
import { Paragraph } from "../../typo"

const Volunteer = () => {
    return (
        <React.Fragment>
            <div className="volunteer-section" style={{ backgroundImage: 'url(/assets/images/volunteer-bg.png)' }}>
                <div className="container-sm">
                    <div className="content-box">
                        <div className="gradient-box-title font-podka">
                            VOLUNTEER YOUR TIME & MAKE $400 - $1100 PER DAY
                        </div>
                        <Paragraph>
                            If you are ready to learn a very legitimate way to earn up to $1100 per day you are at the correct site. This has nothing to do with starting your own business, shoving out hundreds or thousands of dollars to learn the business and then paying out more time and money to find people to purchase something from you. No, this isn't one of those ads that are all over the place on YouTube and pretty much everywhere else on the internet.
                        </Paragraph>
                        <Paragraph>
                            This is access to lists of companies all across the country and even some international locations that are looking for volunteers for a number of research studies they have available that will pay anywhere from $400 to $1100 per day. You could literally contact them today and schedule an appointment to start tomorrow. It is that easy.
                        </Paragraph>
                        <Paragraph>
                            It is a legitimate way to continue to volunteer and get paid regularly. You can do this on your own schedule and still keep your current job or do this full time. Either way, an easy way to supplement your income regularly is now available. Here is what you will receive by joining and creating an account for a membership.
                        </Paragraph>
                        <ul>
                            <li>
                                Learn the ins & outs without learning the hard way & losing profit.
                            </li>
                            <li>
                                Lists of both Domestic and International companies providing volunteer pay
                            </li>
                            <li>
                                Tips to save on transportation & overnight accommodations when traveling
                            </li>
                            <li>
                                Contact lists for providers of local transportation & overnight accommodation
                            </li>
                            <li>
                                Apply to be verified to be listed as a provider & add another income
                            </li>
                            <li>
                                How to use this to travel & get paid
                            </li>
                            <li>
                                Perfect for college students
                            </li>
                            <li>
                                Perfect for remote workers
                            </li>
                            <li>
                                Perfect for van life
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Volunteer