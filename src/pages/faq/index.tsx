"use client"

import React, { useState } from "react"
import Accordion from 'react-bootstrap/Accordion';


import './faq.scss'
import { Heading4, Heading4_0, Heading4_1 } from "../../components/typo";
import { Col, Form, Row } from "react-bootstrap";
import ReactSelect from "react-select";
import { customStylesSelect } from "../../components/ReactSelectStyle";
import { Button } from "../../components/comon/Button";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const AdditionalServices = [
    { value: 'Consulting Guidance & Packages', label: 'Consulting Guidance & Packages' },
    { value: 'Reports', label: 'Reports' },
    { value: 'Write in your request', label: 'Write in your request' }
]


const FAQ = () => {

    const navigate = useNavigate()
    return (
        <React.Fragment>
            <main>
                <div className="faq-banner">
                    <img src="/assets/images/faq-banner.jpg" alt="banner" />
                </div>
                <div className="useage-section">
                    <div className="container">
                        <Row className="justify-content-between">
                            <Col lg={7} xs={12}>
                                <Heading4_0 className="text-warning mb-4">NEWCOMERS READ IMPORTANT NOTES & HOW TO USE THIS SITE</Heading4_0>
                                <Heading4_1 className="text-warning mb-5">IMPORTANT NOTES BEFORE SCHEDULING YOUR SCREENING</Heading4_1>
                            </Col>
                            <Col lg={5} xs={12}>
                                <div className="d-flex flex-wrap justify-content-lg-end justify-content-center gap-2 mb-lg-0 mb-5">
                                    <a className="btn btn-padding btn-secondary-gradient cursor-pointer">CURRENT Studies</a>
                                    <a className="btn btn-padding btn-secondary-gradient cursor-pointer" href="#qna" >Q & A</a>
                                    <a className="btn btn-padding btn-secondary-gradient cursor-pointer" onClick={() => navigate('/post')}>POST  MESSAGE</a>
                                    {/* <span className="btn btn-padding btn-secondary-gradient">VCT CRO’S</span> */}
                                    {/* <span className="btn btn-padding btn-secondary-gradient">CLASSIFIED ADS</span> */}
                                    {/* <span className="btn btn-padding btn-secondary-gradient">NON VCT CRO’S</span> */}
                                    {/* <span className="btn btn-padding btn-secondary-gradient">Service PROVIDERS(Ride/Stay)</span> */}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Col xs={12}>
                                <div className="text-16 d-grid gap-md-4 gap-3">
                                    <div className="d-flex gap-md-5 gap-2 mb-md-0 mb-4 align-items-end flex-md-nowrap flex-wrap">
                                        <Form.Group className="w-100">
                                            <Form.Label className="control-label">SEARCH AVAILABLE RESEARCH STUDIES BY:</Form.Label>
                                            <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='search and select available resea..' />
                                        </Form.Group>
                                        <Button className="btn btn-secondary">SUBMIT</Button>
                                    </div>
                                    <div className="d-flex gap-md-5 gap-2 mb-md-0 mb-4 align-items-end flex-md-nowrap flex-wrap">
                                        <Form.Group className="w-100">
                                            <Form.Label className="control-label">SEARCH CURRENT STUDIES AVAILABLE:</Form.Label>
                                            <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='search and select available resea..' />
                                        </Form.Group>
                                        <Button className="btn btn-secondary">SUBMIT</Button>
                                    </div>
                                    <div className="d-flex gap-md-5 gap-2 mb-md-0 mb-4 align-items-end flex-md-nowrap flex-wrap">
                                        <Form.Group className="w-100">
                                            <Form.Label className="control-label">SEARCH SERVICE PROVIDERS:</Form.Label>
                                            <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='search and select available resea..' />
                                        </Form.Group>
                                        <Button className="btn btn-secondary">SUBMIT</Button>
                                    </div>
                                    <div className="d-flex gap-md-5 gap-2 mb-md-0 mb-4 align-items-end flex-md-nowrap flex-wrap">
                                        <Form.Group className="w-100">
                                            <Form.Label className="control-label">SEARCH cros by:</Form.Label>
                                            <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='search and select available resea..' />
                                        </Form.Group>
                                        <Button className="btn btn-secondary">SUBMIT</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="newcomer-section" id="new-comers">
                    <div className="container">
                        <div className="text-header text-center">
                            <h3>NEWCOMERS</h3>
                            <h4>READ IMPORTANT Q & A , IMPORTANT NOTES &<br />UNDERSTANDING ON HOW TO USE THIS SITE:</h4>
                        </div>
                        <h6>YOU ARE PAID IN 4 WAYS:</h6>
                        <ol>
                            <li>
                                <b>Referral Payment</b> - Paid when you list V4P as a referral. We split this payment with you & send within 48 hrs upon receiving it using Venmo. You can state a referral for each screening/study at many of the CROS. So make this a habit.
                            </li>
                            <li>
                                <b>Screening Payment</b> - Paid when you complete physical screening appointment. Paid by the CRO.
                            </li>
                            <li>
                                <b>Study Payment</b> - Paid during or after completion of the study. Paid by the CRO.
                            </li>
                            <li>
                                <b>Travel Reimbursement Payment</b> - Paid based on receipts you provide or upon miles to & from facility. Paid by the CRO.
                            </li>
                        </ol>
                        <p className="m-b-40"><b>NOTE: </b>Not all CROs pay for screening or travel but most, if not all, pay a referral payment.<br /> KEEP TRACK OF THESE PAYMENTS SO YOU DO NOT LEAVE MONEY ON THE TABLE FROM ANY OF THESE FOUR SOURCES.</p>
                        <h6>HOW TO BEGIN:</h6>
                        <ol>
                            <li>
                                Choose CROs based on the state you reside in or that are close by. After identifying these CROs, you can search for studies associated with their names. If you're new to this, it's recommended to schedule and complete one screening before considering another. If you're inclined to plan multiple screenings, follow these guidelines: Determine whether the CROs are classified as <span>VCT or NON VCT</span> companies. This information can be found by searching using the CROs name under <span>NON VCT / VCT</span> link. For VCT companies, ascertain if they permit <span className="underline">dual screening</span>. Identify studies that align with your availability. Reach out to them for more details and to undergo a phone screening, which will lead to scheduling a physical screening appointment. When speaking to the recruiter, mention your interest in screening at alternative locations too. During this call it is important to remember to provide the recruiter with V4P as your referral so we can pay your half of this fee.
                                <br />
                                <br />
                                Companies that are NON VCT you will not have to be concerned about or if you only have one company that is VCT. The reason is that if there is only one VCT company they will not know about the other NON VCT companies. Only VCT companies share information with one another. In addition, some VCT companies allow <span className="underline">dual screening</span>. You need to know which VCT companies allow this and which do not. You can find these details under <span>IMPORTANT NOTES</span>.
                            </li>
                            <li>
                                Remember to always list V4P with <span>phone number of (847)</span> as a referral when you call for phone screening. Some places require you to complete a form at your physical screening. Make sure you ask the rep for those details. Send an email to our email address: <a href="mailto:Info@V4Pay.com">Info@V4Pay.com</a> with REFERRAL FEE in subject line. In the email list your full name, phone number, the CRO, study name or number and date of your screening. If you need to complete the study first, then do not send this email until you have completed the study. We will send you one half of the referral fee once we receive payment from the CRO. The referral fee differs from CRO to CRO. Some will pay out the referral upon completion of a screening and others require you complete a study with them before releasing the referral payment. Many CROS will change the amount of the referral fee depending on the study. They increase the referral amount if they need volunteers for that study, so pay attention to this. Always ask what the payment amount is for the referral fee along with the screening payment, travel reimbursements and the payment for the study.
                            </li>
                            <li>
                                Put all this information in a digital or physical notebook. Use the <span className="fw-normal" >LIST OF QUESTIONS</span> below every time you call for a phone screening:
                                <b className="d-block">Is there a screening payment?</b>
                                <b className="d-block">Is there travel reimbursement?</b>
                                <b className="d-block">What is the referral fee?</b>
                                <b className="d-block">Is there a referral form I need to complete at screening?</b>
                                <b className="d-block">What is your screening process in order to be paid the screening payment? (Such as BMI, etc.)</b>
                                <b className="d-block">When is the screening payment and referral fee paid out?</b>
                                <b className="d-block">Get clarification on the study you found online, asking pertinent questions such as dates, etc.?</b>
                            </li>
                            <li>
                                It is important to be honest with recruiters during your phone screening. However, if you are currently healthy and do not have lingering health issues. I would think about whether you want to share all your past issues with them, as it may disqualify you from participating in any studies with CROS currently or in the future. You and your doctor will need to decide that together. Healthy volunteers is the majority of the studies most CROs are recruiting for.
                            </li>
                            <li>
                                Make sure you eat healthily for a couple of days before your physical screening appointment. These screenings are an excellent way to get free lab tests to measure your health. Ask for your results after the screening. Many doctors do not do testing until you have problems which is too late to reverse anything serious. If you screen at more than one location, you can make a very descent profit without doing any study from the four sources of payment detailed earlier. The earnings from just the screening process alone will more than pay for your V4P membership.
                            </li>
                            <li>
                                Lastly, use the <span className="fw-normal">MESSAGE BOARD</span> to check posts from other members. They will share changes from VCT, screening, carpooling or room sharing when traveling to other states. They will also share experiences at CROS or changes at CROS. You are encouraged to do the same so members can help one another and produces more participation from others to do the same.
                            </li>
                        </ol>
                        <h6>HOW TO DO STUDIES FULL TIME AND TRAVEL TO CROs ACROSS THE COUNTRY:</h6>
                        <ol>
                            <li>
                                When you feel ready to expand your search and complete studies with other CROS near you or even across the country, this membership will prove invaluable. Start by locating CROs that offer travel reimbursements and screening payments. You can find that information under <span>CROs PROVIDING TRAVEL REIMBURSEMENT / SCREENING PAYMENTS</span>
                            </li>
                            <li>
                                Getting informed about all the details is extremely important in maximizing your opportunities and profit. Remember, the referral fee is an additional payment that will help when you are traveling.
                            </li>
                            <li>
                                Use <span>SERVICE PROVIDERS</span> list to learn best ways to travel for less as you go to specific CROS across the country. All categories under the <span>MESSAGE BOARD</span> will assist in this area as well, such as <span>RIDE/SHARE</span> and <span>CLASSIFIEDS</span>.
                            </li>
                            <li>
                                Consider scheduling multiple screening appointments that are within driving distance and plan a trip to maximize travel reimbursements, screening payments, and referral fees. This strategy enhances your chances of consistently participating in paid studies, thereby supplementing your income.<br />
                                <b>SCENARIO #1:</b> For instance, you could fly into Dulles International Airport, r ent a car, and drive to Paraxein Baltimore, MD for a screening on the first day, then drive to Pfizer in New Haven, CT for another screening the next day. In this scenario, you'd receive $150 from Paraxel and $185 from Pfizer for the screenings, plus travel reimbursements. Paraxel offers   up to $1000 for travel to and from their facility, and Pfizer reimburses $0.25 per mile from your home address to their facility plus up to $150 for  overnight accommodations the night before the screening. In this scenario, you would receive a total of $335 in screening payments and an  additional $275 in referral payments, based on the lowest referral amount paid by these two companies. The actual amount could be higher as  referral payments can vary by study at these companies. Thus, your total earnings would be $610, from which you'd subtract the $40 for the  additional night. The primary objective is to secure a spot in one of these studies, and by screening for two, you've doubled your chances. Having  a backup study is a step towards becoming a professional volunteer and ensuring a steady stream of study payments.
                                <br />
                                <br />
                                <b>SCENARIO #2:</b> Suppose you travel to Kansas for clinical screening appointments. Kansas is one of the states that will allow you to screen at all three locations. You could schedule screenings at Alta Sciences and Dr. Vince, earning $175 and $250 respectively. Although Icon does not pay for screening, they offer a referral payment between $300 and $500. Additionally, Alta Sciences provides a referral payment of $500. In this scenario, your earnings from the screenings and referral payments could range from $825 to $925, which could substantially cover your travel expenses to and from the CROs and back home. With three screening opportunities in Kansas, you can partake in whichever study you prefer but ensuring you will have backup options if a screening goes awry or someone else is chosen over you in a study. Having backups is crucial for maintaining a steady flow of paid studies.
                            </li>
                            <li>
                                Utilizing our <span>SERVICE PROVIDERS</span> list and tips and <span>RIDE/SHARE</span> ads, you will easily have enough and even money leftover. Many of our members do and have made a comfortable living utilizing these strategies.
                            </li>
                            <li>Establish a habit of saving a portion from each study to utilize to travel to other locations and screening in multiple CROs to have a backup study.</li>
                            <li>CROs by state you live in or nearby states. Once you have the name of those CROS, you can search studies by those names. Look for studies that fit your schedule and then contact them to get more information and to complete phone screening to set up an appointment for your physical screening.</li>
                        </ol>
                        <p className="text-center color-secondary" >If you want to increase your chances of being selected for the studies from your top pick & staying healthy to continue to do studies as professional volunteer. finding the best studies You can sign up for consulting services/packages below.</p>
                        <div className="text-center">
                            <a href="#Bilal" className="btn btn-secondary rounded-0">Click here</a>
                        </div>
                        <div className="separator"></div>
                        <div className="text-header text-center" id='important-notes'>
                            <h3>IMPORTANT NOTES:</h3>
                            <h4>READ IMPORTANT Q & A , IMPORTANT NOTES &<br />UNDERSTANDING ON HOW TO USE THIS SITE:</h4>
                        </div>

                        <Accordion className="mb-4" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="fw-medium">1. The following companies do NOT allow DUAL SCREENING:</Accordion.Header>
                                <Accordion.Body>
                                    <p>AXIS – Dillon, MN<br />
                                        Celerion - Phoenix, AZ<br />
                                        ICON - TX<br />
                                        ICON - UT<br />
                                        Nucleus -<br />
                                        Parexel - Glendale, CA<br />
                                        Pfizer - New Haven, CT<br />
                                        Worldwide -</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="fw-medium">2. The following companies allow DUAL SCREENING:</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold" >Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)<br />
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="fw-light">3. All companies (CROs) on request of sponsor will use VCT services. Here are companies who are otherwise non VCT companies but in past and/or currently have used VCT services on request by their sponsor/s. Due to this process, these CROs could become VCT permanently in the future. It is in your best interest to ask when calling on the phone before securing a screening appointment.</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <ol>
                            <li>Plan out your travel & accommodations before scheduling a screening. Use our list of Service Providers to assist in taking the cost effective route to help maximize your profits. You can also check Message Board & Classifieds section for posts of other members that will carpool or who may find other options for travel & accommodations as well.</li>
                            <li>
                                Many CROs have restrictions if you cancel a screening. Call and get informed & inquire about the study you are interested in & find out if there are any restrictions or penalties if you cancel a screening before scheduling a screening. The following companies do have restrictions.<br />
                                <b className="d-block">Medpace – Cincinnati, OH</b>
                                They will not allow you to screen for any other study until that study is over if you cancel a screening for a study.
                                <b className="d-block">Dr. Vince Clinical – Kansas City, KS</b>
                                You must leave a message on voicemail and wait for them to call you back. If you keep calling back you will be put at the bottom of the list. Using this tactic to stop repeat calls.
                            </li>
                            <li>
                                If you schedule with a CRO who uses VCT or similar services, make sure you call VCT directly or ask the next CRO that you call that also uses VCT services if there will be a problem with qualifying with the study you are interested in. Each study has different requirements based on half life of the drug they are testing. This is very important. You could arrive and spend time and money needlessly.
                            </li>
                            <li>
                                Check <span className="fw-normal">MESSAGE BOARD</span> for notes from other members on current experiences/CRO changes. Members also post ride sharing, car pooling and rooms  available for stays types of posts.
                            </li>
                            <li>
                                The <span className="fw-normal">MESSAGE BOARD</span> is also where we post updates on any changes or guidelines from CROs or Service Providers.
                            </li>
                        </ol>
                        <h6>CROs PROVIDING TRAVEL REIMBURSEMENT / SCREENING PAYMENTS:</h6>
                        <ul>
                            <li>
                                <b>Abbvie - </b>$75 screening payment.
                            </li>
                            <li>
                                <b>Alta Sciences - </b>$175 screening payment. They also pay $500 referral fee.
                            </li>
                            <li>
                                <b>Celerion - </b>Lincoln location study dependent will pay screening & travel stipends. Referral fees $200 - $500.
                            </li>
                            <li>
                                <b>Dr. Vince - </b>$250 screening payment. No referral fees. We mention because this is rare.
                            </li>
                            <li>
                                <b>Icon - </b>$250 screening payment. No referral fees. We mention because this is rare.
                            </li>
                            <li>
                                <b>MedPace - </b>$150 screening payment. They always pay for your hotel the night before a check in or an OPV once you are in the study. They pay mileage costs per mile for most studies from address listed on your license and their facility and maxes out at no more than $300 each way.
                            </li>
                            <li>
                                <b>Paraxel - </b>$150 screening payment at both locations in MD and CA. They reimburse up to $1000 in travel expenses total for screening & study. Only reimburse travel to and from their facility. This can be airfare, bus, train, gas, car rental, Uber. You will be required to submit receipts for proof. They do not reimburse accommodation costs such as hotel or Airbnb.
                            </li>
                            <li>
                                <b>Pfizer - </b>$185 screening payment. They pay 20 cents per mile from address listed on your license & their facility. Pay up to $150 for overnight accommodations the night before Screenings and <span className="fw-normal">Check Ins</span> and <span className="fw-normal">Out Patient visits (OPV)</span>.
                            </li>
                            <li>
                                <b>Icon - </b>$250 screening payment. No referral fees. We mention because this is rare.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="newcomer-section faq-sec">
                    <div className="container" id='qna'>
                        <div className="text-header mb-0">
                            <h3 className="mb-5 text-center">Q & A:</h3>
                            <h4 className="mb-4">GENERAL OVERVIEW:</h4>
                        </div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="fw-medium">Q: How is it possible to be paid to volunteer at such high compensation rates daily?</Accordion.Header>
                                <Accordion.Body>
                                    <p>A: Clinical research studies, also known as clinical trials, are at the heart of medical advancements. These studies rely heavily on volunteers to participate in research that aims to uncover better ways to treat, prevent, diagnose, and understand human diseases. In order to have volunteers they need to compensate such individuals to participate.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="fw-medium">Q: What are clinical research studies?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold" >Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)<br />
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="fw-light">Q: Why should I volunteer for a clinical research study?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="fw-light">Q: What are the risks of participating in a clinical research study?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="fw-light">Q: How do I know if a clinical research study is right for me?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="fw-light">Q: How much do I get paid for participating?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="fw-light">Q: How do I find clinical research studies to participate in on this site?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header className="fw-light">Q: What is informed consent?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header className="fw-light">Q: Can I leave a study once it has started?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header className="fw-light">Q: Will my personal information be kept confidential?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header className="fw-light">Q: What happens after the study ends?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header className="fw-light">Q: What does dual screening mean in clinical trials?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header className="fw-light">Q: What is VCT (Verified Clinical Trials)?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="13">
                                <Accordion.Header className="fw-light">Q: What is the Institutional Review Board (IRB) in clinical trials?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="14">
                                <Accordion.Header className="fw-light">Q: What is the difference between VCT and VCT fingerprinting in clinical trials?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="15">
                                <Accordion.Header className="fw-light">Q: Is there compensation for screening appointments in clinical trials?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="16">
                                <Accordion.Header className="fw-light">Q: Is the compensation dependent on testing negative for drugs during screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="17">
                                <Accordion.Header className="fw-light">Q: What happens if a participant’s blood pressure or BMI is out of the required range?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="18">
                                <Accordion.Header className="fw-light">Q: How important is it to know the study requirements before making a screening appointment?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="19">
                                <Accordion.Header className="fw-light">Q: Where can one find the specific requirements for each clinical trial?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="20">
                                <Accordion.Header className="fw-light">Q: Are there any age requirements?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="21">
                                <Accordion.Header className="fw-light">Q: What other qualifications or requirements are there?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="text-header my-5">
                            <h4 className="">SCREENING PROCESS:</h4>
                        </div>
                        <Accordion defaultActiveKey="00">
                            <Accordion.Item eventKey="00">
                                <Accordion.Header className="fw-medium">Q: What is a screening appointment/interview in clinical trials?</Accordion.Header>
                                <Accordion.Body>
                                    <p>A: Clinical research studies, also known as clinical trials, are at the heart of medical advancements. These studies rely heavily on volunteers to participate in research that aims to uncover better ways to treat, prevent, diagnose, and understand human diseases. In order to have volunteers they need to compensate such individuals to participate.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="01">
                                <Accordion.Header className="fw-medium">Q: What do they screen for at these screening appointments?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold" >Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)<br />
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="02">
                                <Accordion.Header className="fw-light">Q: What is the role of ECGs in screening appointments?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="03">
                                <Accordion.Header className="fw-light">Q: Why are vitals taken during the screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="04">
                                <Accordion.Header className="fw-light">Q: Why is urine collection necessary during screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="05">
                                <Accordion.Header className="fw-light">Q: Why are physical exams conducted during screening appointments?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="06">
                                <Accordion.Header className="fw-light">Q: Why is blood lab work necessary during screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="07">
                                <Accordion.Header className="fw-light">Q: Why are weight and height measurements important in screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="08">
                                <Accordion.Header className="fw-light">Q: What is the process of getting screened for participation in a clinical trial?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="09">
                                <Accordion.Header className="fw-light">Q: If I don’t pass a screening, will I still receive compensation for the screening?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="text-header my-5">
                            <h4 className="">HOW YOU ARE PAID / PAYMENTS:</h4>
                        </div>
                        <Accordion defaultActiveKey="000">
                            <Accordion.Item eventKey="000">
                                <Accordion.Header className="fw-medium">Q: How are payments managed for studies, screenings and travel by the CROs?</Accordion.Header>
                                <Accordion.Body>
                                    <p>A: Clinical research studies, also known as clinical trials, are at the heart of medical advancements. These studies rely heavily on volunteers to participate in research that aims to uncover better ways to treat, prevent, diagnose, and understand human diseases. In order to have volunteers they need to compensate such individuals to participate.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="001">
                                <Accordion.Header className="fw-medium">Q: How does the referral payment from V4P work?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold" >Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)<br />
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="002">
                                <Accordion.Header className="fw-light">Q: Where can I find information about cost-effective travel to and from CROs?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="003">
                                <Accordion.Header className="fw-light">Q: How can I optimize my earnings from this process?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="fw-bold">
                                        Alta Sciences<br />
                                        Celerion (Lincoln location only)<br />
                                        Dr. Vince<br />
                                        ICON (Kansas location only)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </main>
            <Footer />

        </React.Fragment>
    )
}

export default FAQ