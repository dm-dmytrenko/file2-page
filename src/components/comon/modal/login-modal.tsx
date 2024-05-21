"use client"

import React from "react"
import { Heading2, Heading3, Heading4, Paragraph } from "../../typo"
import { Form, Modal } from "react-bootstrap"
import { Button } from "../Button"
import { Link } from "react-router-dom"


const LoginModal = ({show, onHide, ...props }:any) => {
    return (
        <React.Fragment>
            <Modal show={show} className="custom-modal login-modal" centered onHide={onHide} {...props}>
                <Modal.Body className="custom-modal-body">
                    <div className="grid-row">
                        <div className="left-col">
                            <img src="/assets/images/login-bg.png" alt="img" />
                        </div>
                        <div className="right-col">
                            <div>
                                <Heading2>Lets get started</Heading2>
                                <Paragraph>We’ll gather some basic information to start the process.</Paragraph>
                                <Heading4>New to V4P?</Heading4>
                                <div className="text-center">
                                    <Button className="btn btn-secondary btn-rounded">Create an account</Button>
                                </div>
                            </div>
                            <div>
                                <Heading3>Already have an account?</Heading3>
                                <form>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="d-flex mb-4 text-10" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I  accept T&C and privacy policy" />
                                        <Link to={'#'}>Forgot username/password?</Link>
                                    </Form.Group>
                                    <div className="button-holder">
                                        <Link to={'/faq'} className="btn btn-secondary-gradient w-100">Log in</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default LoginModal