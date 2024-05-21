"use client"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { Heading4 } from "../typo"

import './after-login-header.scss'
import { Dropdown } from "react-bootstrap";

const HeaderAfterLogin = ({ PageTile, activePage, closeIcon }: any) => {
    const navigate = useNavigate()

    const handleNavigation = (url:string) =>{
        navigate(url)
    }

    return (
        <React.Fragment>
            <header className="header-after-login">
                <div className="container">
                    <div className="header-row">
                        <Link to={'/'} className="logo">
                            v<span>p</span>4
                        </Link>
                        {PageTile ?
                            <Heading4 className="page-title">{PageTile}</Heading4>
                            :
                            <div className="page-nav">
                                <Link to='/post' className={`${activePage === 'post' && 'active'}`}>Posts</Link>
                                <Link to='/rides' className={`${activePage === 'rides' && 'active'}`}>Rides / Stays</Link>
                                <Link to='/service' className={`${activePage === 'services' && 'active'}`}>Service Providers</Link>
                            </div>
                        }
                        {closeIcon ?
                            <div className="user-icon" onClick={(e)=> handleNavigation("/")}>
                                <img className="fill-white" src="/assets/icons/close.svg" />
                            </div>
                            :
                            <Dropdown className="dropdown-profile">
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <div className="user-icon">
                                        <img src="/assets/images/user.png" alt="icon" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={(e)=> handleNavigation("/faq")}>FAQ</Dropdown.Item> */}
                                    {/* <Dropdown.Item onClick={(e)=> handleNavigation("/contact")}>Contact Form</Dropdown.Item> */}
                                    {/* <Dropdown.Item onClick={(e)=> handleNavigation("/personal-detail")}>Personal Detail</Dropdown.Item> */}
                                    {/* <Dropdown.Item onClick={(e)=> handleNavigation("/location-content")}>Location Content</Dropdown.Item> */}
                                    <Dropdown.Item onClick={(e)=> handleNavigation("/")} className="">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default HeaderAfterLogin