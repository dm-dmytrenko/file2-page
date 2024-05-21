"use client"
import React from "react"
import { Heading4, Heading5, Paragraph } from "../../typo"

import Slider from "react-slick";
import './happy-customer.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappyCustomerData = [
    {
        customerName: "Sara & Ken G",
        description: "We used volunteering for studies as a way to get our small business off the ground. Met many individuals in the process that do this professionally and earn a very descent living. We started just locally but once we learned about all the volunteers needed across the country we bought a van, started living the van life and explored the country while finding studies to volunteer for while we stayed in the area. We couldn't be happier that we found such an easy way to earn additional income"
    },
    {
        customerName: "Sara & Ken G",
        description: "We used volunteering for studies as a way to get our small business off the ground. Met many individuals in the process that do this professionally and earn a very descent living. We started just locally but once we learned about all the volunteers needed across the country we bought a van, started living the van life and explored the country while finding studies to volunteer for while we stayed in the area. We couldn't be happier that we found such an easy way to earn additional income"
    },
    {
        customerName: "Sara & Ken G",
        description: "We used volunteering for studies as a way to get our small business off the ground. Met many individuals in the process that do this professionally and earn a very descent living. We started just locally but once we learned about all the volunteers needed across the country we bought a van, started living the van life and explored the country while finding studies to volunteer for while we stayed in the area. We couldn't be happier that we found such an easy way to earn additional income"
    },
    {
        customerName: "Sara & Ken G",
        description: "We used volunteering for studies as a way to get our small business off the ground. Met many individuals in the process that do this professionally and earn a very descent living. We started just locally but once we learned about all the volunteers needed across the country we bought a van, started living the van life and explored the country while finding studies to volunteer for while we stayed in the area. We couldn't be happier that we found such an easy way to earn additional income"
    },
    {
        customerName: "Sara & Ken G",
        description: "We used volunteering for studies as a way to get our small business off the ground. Met many individuals in the process that do this professionally and earn a very descent living. We started just locally but once we learned about all the volunteers needed across the country we bought a van, started living the van life and explored the country while finding studies to volunteer for while we stayed in the area. We couldn't be happier that we found such an easy way to earn additional income"
    }
]

const HappyCustomers = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="haapy-customers">
                 <div className="container">
                    <div className="text-center">
                        <Heading4 className="font-podka">Happy Customers</Heading4>
                        <Heading5>We have been working with clients around the country</Heading5>
                    </div>
                    <div className="customer-slider-wapper">
                    <Slider {...settings}>
                        {
                            HappyCustomerData && HappyCustomerData?.map((item, index) => (
                            <div className="card-item" key={index}>
                                <div className="content-box">
                                    <Paragraph>{item.description}</Paragraph>
                                </div>
                                <div className="customer-name">{item.customerName}</div>
                            </div>
                            ))
                        }
                        </Slider>
                    </div>
                 </div>
            </div>
        </React.Fragment>
    )
}

export default HappyCustomers