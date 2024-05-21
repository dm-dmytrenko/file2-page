import React, { useState } from "react"
import { Heading4, Paragraph } from "../../typo"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { Button } from "../Button"
import RequestSent from "./request-sent"

const CreatePostModal = ({ show, onHide }: any) => {
    const [requestModal, setRequestModal] = useState(false)

    return (
        <React.Fragment>
            <Modal show={show} centered className="post-create-modal" onHide={onHide}>
                <Modal.Header>
                    <Heading4>Create Post</Heading4>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="d-flex align-items-start gap-4">
                            <Paragraph className="text-nowrap">Type of Post :</Paragraph>
                            <div className="d-flex align-items-center flex-wrap gap-md-4 gap-2">
                                <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Car pooling" />
                                </Form.Group>
                                <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Rides" />
                                </Form.Group>
                                <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Rooms for rent" />
                                </Form.Group>
                                <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Other" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <Row className="justify-content-between">
                                    <Col md={4} xs={12}>
                                        <div className="upload-img">
                                            <input type="file" />
                                            <span>+</span>
                                        </div>
                                    </Col>
                                    <Col md={7} xs={12}>
                                        <Form.Group className="mb-0" controlId="formBasicEmail">
                                            <textarea className="form-control" placeholder="Write your message here....."></textarea>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className="card-footer">
                                <Paragraph>Add to your post</Paragraph>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon">
                                        <input type="file" />
                                        <img src="/assets/icons/image-upload.svg" />
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/icons/three-dots.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-3">
                        <Button className="btn btn-secondary-gradient w-100 radius-0" onClick={() => setRequestModal(true)}>Post</Button>
                    </div>
                </Modal.Body>
            </Modal>

            <RequestSent show={requestModal} onHide={() => setRequestModal(false)} />

        </React.Fragment>
    )
}

export default CreatePostModal