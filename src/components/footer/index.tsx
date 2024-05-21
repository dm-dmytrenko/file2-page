import React from "react"
import { Link } from "react-router-dom";

import './footer.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="footer-row">
                        <div className="d-flex">
                            <div className="logo">v<span>p</span>4</div>
                            <div className="social-icons">
                                <Link to={'#'}>
                                    <img src="/assets/icons/insta.svg" />
                                </Link>
                                <Link to={'#'}>
                                    <img src="/assets/icons/social-icon.svg" />
                                </Link>
                                <Link to={'#'}>
                                    <img src="/assets/icons/twiter.svg" />
                                </Link>
                                <Link to={'#'}>
                                    <img src="/assets/icons/youtube.svg" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">&copy; 2020 V4P All rights reserved</div>
                        <div className="d-flex justify-content-end">
                            <Link to="#">Privacy Policy</Link>
                            <Link to="#">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer