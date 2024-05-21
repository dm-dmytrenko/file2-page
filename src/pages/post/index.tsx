"use client"

import React, { useState } from "react"
import { Button } from "../../components/comon/Button"
import HeaderAfterLogin from "../../components/header-after-login"
import PostCard from "../../components/post-card"
import { Form, Modal, Row } from "react-bootstrap"
import { Heading4 } from "../../components/typo"


import './post.scss'


const PostData = [
    {
        userIcon: '/assets/images/user.png',
        name: 'Jennifer Lawrence',
        postDate: 'Posted on 12:00 AM',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
    },
    {
        userIcon: '/assets/images/user.png',
        name: 'Jennifer Lawrence',
        postDate: 'Posted on 12:00 AM',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
    },
    {
        userIcon: '/assets/images/user.png',
        name: 'Jennifer Lawrence',
        postDate: 'Posted on 12:00 AM',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
    }
]

const PostPage = () => {

    const [postMessage, setPostMessage] = useState(false)


    return (
        <React.Fragment>
            <HeaderAfterLogin activePage={'post'} />
            <main className="ride-page">
                <div className="container">
                    <div className="button-holder text-center">
                        <Button className="btn btn-secondary w-50" onClick={() => setPostMessage(true)}>Post Message</Button>
                    </div>
                    <div className="grid-row">
                        <div>
                            <div className="d-grid gap-4">
                                {PostData && PostData?.map((item: any, index: any) => (
                                    <PostCard
                                        key={index}
                                        userIcon={item.userIcon}
                                        name={item.name}
                                        postDate={item.postDate}
                                        desc={item.desc}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <div className="add-post flex-1" onClick={() => setPostMessage(true)}>
                                Ads Section
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Modal show={postMessage} centered className="post-msg-modal" onHide={() => setPostMessage(false)}>
                <Modal.Body>
                    <Heading4>Post Message</Heading4>
                    <form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <textarea className="form-control" placeholder="Write your message here....."></textarea>
                        </Form.Group>
                        <div className="d-flex align-items-center gap-5">
                            <Button className="btn btn-gradient">Send</Button>
                            <span className="btn" onClick={() => setPostMessage(false)}>Cancel</span>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default PostPage