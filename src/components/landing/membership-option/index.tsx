"use client"

import React from "react"

import { Heading4, Heading5, Paragraph } from "../../typo"
import { Button } from "../../comon/Button"

import './membership-option.scss'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"

const PackageData = [
    {
        packageName: 'Option 1',
        packagePrice: '$149',
        packageDiscount: '$199',
        packageLimit: 'Pay upfront for 2 years',
    },
    {
        packageName: 'Option 2',
        packagePrice: '$100',
        packageDiscount: '$150',
        packageLimit: 'For 1 year',
    },
    {
        packageName: 'Option 3',
        packagePrice: '$75',
        packageDiscount: '$99',
        packageLimit: 'For 6 months',
    },
    {
        packageName: 'Option 4',
        packagePrice: '$50',
        packageDiscount: '$75',
        packageLimit: 'For 3 months',
    },
    {
        packageName: 'Option 5',
        packagePrice: '$25',
        packageDiscount: '$45',
        packageLimit: 'For 7 days',
    }
]

const MembershipOption = () => {
    const navigate = useNavigate()

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 812,
                settings: {
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 676,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <React.Fragment>
            <div className="membership-option">
                <div className="container">
                    <div className="text-center">
                        <Heading4 className="font-podka">Membership Options:</Heading4>
                        <Heading5>You will receive all the benefits from your membership:</Heading5>
                    </div>
                </div>
                <div className="packge-row">
                    <div className="discount-icon">
                        <img src="/assets/icons/package-limit.svg" alt="icon" />
                    </div>
                    <Slider {...settings}>
                        {
                            PackageData && PackageData?.map((item: any, index: any) => (
                                <div className="package-card" key={index}>
                                    <div className="package-name">{item.packageName}</div>
                                    <div className="package-price">{item.packagePrice}<sup>.00</sup> </div>
                                    <div className="package-discount">{item.packageDiscount}<sup>.00</sup></div>
                                    <div className="package-limit">{item.packageLimit}</div>
                                    <div className="button-holder">
                                        <Button className="btn btn-secondary-outline">Get Started</Button>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="text-center">
                    <Button className="btn btn-secondary sign-up-link" onClick={()=>{navigate('/personal-detail')}}>Sign up and become a  member</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MembershipOption