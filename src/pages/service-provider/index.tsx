"use client"

import React, { useState } from "react"
import { Button } from "../../components/comon/Button"
import HeaderAfterLogin from "../../components/header-after-login"
import PostCard from "../../components/post-card"
import { Accordion, Col, Form, Modal, Row } from "react-bootstrap"
import { Heading4 } from "../../components/typo"

import Select from 'react-select'

import './service.scss'
import { customStylesSelect } from "../../components/ReactSelectStyle"
import ServiceCard from "../../components/services-card"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ServicePostData = [
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

const ServiceCardData = [
    {
        image: '/assets/images/service-1.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-2.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-1.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-2.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-1.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-2.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-2.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-1.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    },
    {
        image: '/assets/images/service-2.png',
        HotelName: "Pfizer New Haven CRU",
        HotelLocation: "New Haven, CT",
        Rating: '4.5'
    }
]

const RightArrow = ({ className, onClick }:any) => {
    return (
        <span className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                <path d="M10.9575 20.5885L15.1815 15.2935L10.9575 9.99854" stroke="black" stroke-Width="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    )
}

const LeftArrow = ({ className, onClick }:any) => {
    return (
        <span className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
                <path d="M13.998 9.41147L9.77405 14.7065L13.998 20.0015" stroke="black" stroke-Width="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    )
}

const ServiceProvider = () => {

    const [postMessage, setPostMessage] = useState(false)

    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RightArrow className="slick-arrow slick-next" />,
        prevArrow: <LeftArrow className="slick-arrow slick-prev" />,
    };

    // Helper function to chunk the array into rows of 6 items
    const chunkArray = (array: any, chunkSize: any) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    // Chunk the ServiceCardData into rows
    const rows = chunkArray(ServiceCardData, 6);


    return (
        <React.Fragment>
            <HeaderAfterLogin activePage={'services'} />
            <main className="ride-page">
                <div className="container">
                    <div className="d-grid gap-2 my-5">
                        <Heading4 className="filter-heading">search service providers</Heading4>
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
                                <Button className="btn btn-secondary w-100" onClick={() => setPostMessage(true)}>Post Message</Button>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    {rows.map((row, rowIndex) => (
                                        <Row className="row-wrapper" key={rowIndex}>
                                            {row.map((item: any, colIndex: any) => (
                                                <Col lg={4} md={6} xs={12} key={colIndex}>
                                                    <ServiceCard
                                                        Image={item.image}
                                                        Hotel={item.HotelName}
                                                        Location={item.HotelLocation}
                                                        Rating={item.Rating}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    ))}
                                </Slider>
                            </div>
                            <div className="button-holder text-center">
                                <Button className="btn btn-secondary w-100" onClick={() => setPostMessage(true)}>Post</Button>
                            </div>
                            <div className="d-grid gap-4">
                                {ServicePostData && ServicePostData?.map((item: any, index: any) => (
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

export default ServiceProvider