"use client"

import React, { useState } from "react"
import { Button } from "../../components/comon/Button"
import HeaderAfterLogin from "../../components/header-after-login"
import PostCard from "../../components/post-card"
import { Accordion, Col, Form, Modal, Row } from "react-bootstrap"
import { Heading4, Paragraph } from "../../components/typo"

import Select from 'react-select'

import './ride.scss'
import { customStylesSelect } from "../../components/ReactSelectStyle"
import CreatePostModal from "../../components/comon/modal/create-post"

const StateOption = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const RegionOption = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const RidesStaysData = [
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

const RidesStays = () => {

    const [createPost, setCreatePost] = useState(false)

    return (
        <React.Fragment>
            <HeaderAfterLogin activePage={'rides'} />
            <main className="ride-page">
                <div className="container">
                    <div className="d-grid gap-2 my-5">
                        <Heading4 className="filter-heading">Search Ride/stay</Heading4>
                        <div className="search-filter">
                            <div>
                                <Select styles={customStylesSelect} options={StateOption} placeholder='Select states' />
                            </div>
                            <div>
                                <Select styles={customStylesSelect} options={RegionOption} placeholder='Select Region' />
                            </div>
                            <Form.Control placeholder="Name of CRO" />
                            <Button className="btn btn-primary">Submit</Button>
                        </div>
                    </div>

                    <div className="grid-row">
                        <div>
                            <div className="button-holder text-center mt-0">
                                <Button className="btn btn-secondary w-100" onClick={() => setCreatePost(true)}>Post Message</Button>
                            </div>
                            <div className="d-grid gap-4">
                                {RidesStaysData && RidesStaysData?.map((item: any, index: any) => (
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
                            <div className="">


                                <Accordion className="custom-accordion" defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="">FILTER</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Car pooling" />
                                            </Form.Group>
                                            <Form.Group className="d-flex mb-2" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Rides" />
                                            </Form.Group>
                                            <Form.Group className="d-flex" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Rooms for rent" />
                                            </Form.Group>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </div>
                            <div className="add-post flex-1" onClick={() => setCreatePost(true)}>
                                Ads Section
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <CreatePostModal show={createPost} onHide={() => setCreatePost(false)} />

        </React.Fragment>
    )
}

export default RidesStays