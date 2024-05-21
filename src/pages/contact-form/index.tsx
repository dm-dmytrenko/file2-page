"use client"
import React from "react"
import HeaderAfterLogin from "../../components/header-after-login"
import { Col, Form, Row } from "react-bootstrap"
import { Heading3, Paragraph } from "../../components/typo"

import ReactSelect from "react-select"
import MembershipOption from "../../components/landing/membership-option"
import AccountCreation from "../../components/account-creation"

import './contact.scss'
import { customStylesSelect } from "../../components/ReactSelectStyle"
import { Button } from "../../components/comon/Button"

const AdditionalServices = [
    { value: 'Consulting Guidance & Packages', label: 'Consulting Guidance & Packages' },
    { value: 'Reports', label: 'Reports' },
    { value: 'Write in your request', label: 'Write in your request' }
]

const ContactForm = () => {

    return (
        <React.Fragment>
            <HeaderAfterLogin PageTile={'Contact Form'} closeIcon={true}/>
            <main className="personal-detail-page">
                <div className="container-sm">
                    <div className="mb-4 text-center">
                        <Heading3 className="page-title mb-5">Personal Details</Heading3>
                    </div>
                    <Row>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Name</Form.Label>
                                <Form.Control className="form-control-custom w-100" type="text" placeholder="Enter your name" />
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
                                <Form.Label className="control-label">city</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your city" />
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
                                <Form.Label className="control-label">zip</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your zip" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">states</Form.Label>
                                <Form.Control className="form-control-custom" type="email" placeholder="Enter your states" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <Col xs={12}>
                            <div className="mb-3">
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Label className="control-label mb-3">Enquiry in regards to:</Form.Label>
                                    <div className="d-grid gap-1">
                                        <div className="d-flex gap-md-4 gap-2 mb-md-0 mb-4 align-items-center flex-wrap">
                                            <label>Additional Services:</label>
                                            <ReactSelect className="react-select-2" styles={customStylesSelect} options={AdditionalServices} placeholder='Additional Services' />
                                        </div>
                                        <Form.Check className="text-14" type="checkbox" label="Technical" />
                                        <Form.Check className="text-14" type="checkbox" label="General" />
                                        <Form.Check className="text-14" type="checkbox" label="Payment" />
                                    </div>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="">
                                <Form.Group className="mb-4 d-grid" controlId="">
                                    <Form.Label className="control-label mb-2">Message:</Form.Label>
                                    <textarea className="form-control-custom w-100" placeholder="Write here....."></textarea>
                                </Form.Group>
                            </div>
                            <div className="text-center">
                                <Button className="btn btn-secondary">Submit</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        </React.Fragment>
    )
}

export default ContactForm