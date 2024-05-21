"use client"
import React from "react"
import HeaderAfterLogin from "../../components/header-after-login"
import { Col, Form, Row } from "react-bootstrap"
import { Heading3, Paragraph } from "../../components/typo"

import './detail.scss'
import { customStylesSelect } from "../../components/ReactSelectStyle"
import ReactSelect from "react-select"
import MembershipOption from "../../components/landing/membership-option"
import AccountCreation from "../../components/account-creation"

const genderOption = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
]

const PersonalDetail = () => {

    return (
        <React.Fragment>
            <HeaderAfterLogin PageTile={'V4p membership account creation'} />
            <main className="personal-detail-page">
                <div className="container-sm">
                    <div className="mb-4 text-center">
                        <Heading3 className="page-title mb-5">Personal Details</Heading3>
                    </div>
                    <Row>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Name</Form.Label>
                                <Form.Control className="form-control-custom" type="text" placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Email</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your email" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Phone</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your phone number" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Gender</Form.Label>
                                <div>
                                    <ReactSelect styles={customStylesSelect} options={genderOption} placeholder='Select Region' />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Age</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your age" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">As of: (DOB)</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="placeholder" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Address</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your address" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">city</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your city" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">states</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your states" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">zip</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your zip" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-5" />
                    <Row>
                        <Col xs={12}>
                            <div className="mb-3">
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Label className="control-label mb-3">Select what area of details you would like to receive:</Form.Label>
                                    <div className="d-grid gap-1">
                                        <Form.Check className="text-14" type="checkbox" label="Healthy Volunteers 18 - 55 years of age" />
                                        <Form.Check className="text-14" type="checkbox" label="Healthy Volunteers up to 65 years of age" />
                                        <Form.Check className="text-14" type="checkbox" label="Higher BMI studies for weight loss or specific studies" />
                                        <Form.Check className="text-14" type="checkbox" label="Other specialty Diagnoses" />
                                        <Form.Check className="text-14" type="checkbox" label="Receive text and/or email notifications of new studies" />
                                        <Form.Check className="text-14" type="checkbox" label="All" />
                                        <span className="text-12">*If undecided or not sure , click all.</span>
                                    </div>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="">
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Label className="control-label mb-3">Do you have a service you would like to provide to study participants under transportation or accommodations?</Form.Label>
                                    <div className="d-flex gap-4">
                                        <Form.Check type="radio" aria-label="radio 1" label={'Yes'} />
                                        <Form.Check type="radio" aria-label="radio 2" label={'No'} />
                                    </div>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="">
                                <Form.Group className="mb-4 d-grid" controlId="">
                                    <Form.Label className="control-label mb-2">Details of Ad</Form.Label>
                                    <textarea className="form-control-custom w-50" placeholder="Enter details"></textarea>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                </div>
                <MembershipOption />
                <div className="container">
                    <div className="d-grid gap-2">
                        <Paragraph className="text-muted text-14 mb-2 text-black">
                            You are joining as a sneak peek option for a full membership. During or after the 7 days you are welcome to pay the difference to obtain a full membership at any of the above options. We will provide credit towards a full membership option but there is no refund with this option. It is a final sale. You must click both consents below to proceed forward with payment.
                        </Paragraph>
                        <Form.Check className="text-14 text-black" type="checkbox" label="I agree and have read and understand the full terms under this selection." />
                        <Form.Check className="text-14 text-black" type="checkbox" label="I agree and understand this is a final sale and there are no refunds given under this selection." />
                    </div>
                </div>
                <div className="container">
                    <AccountCreation />
                </div>
            </main>
        </React.Fragment>
    )
}

export default PersonalDetail