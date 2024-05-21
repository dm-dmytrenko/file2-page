import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { Heading2, Heading4 } from "../typo"
import { Button } from "../comon/Button"

const AccountCreation = () => {
    return (
        <React.Fragment>
            <div className="mt-5">
                <Heading4 className="page-title text-center mb-4">Account Creation</Heading4>
                <form>
                    <Row className="w-50 mx-auto">
                        <Col xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Username</Form.Label>
                                <Form.Control className="form-control-custom" type="text" placeholder="Enter your username" />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">Password</Form.Label>
                                <Form.Control className="form-control-custom" type="text" placeholder="Enter your Password" />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group className="mb-4" controlId="">
                                <Form.Label className="control-label">confirm password</Form.Label>
                                <Form.Control className="form-control-custom" type="text" placeholder="Enter your Password" />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Button className="btn w-100 radius-0 btn-secondary">Save</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AccountCreation