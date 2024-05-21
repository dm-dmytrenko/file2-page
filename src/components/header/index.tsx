"use client"

import React, { useState } from "react"
import { Button } from "../comon/Button"

import LoginModal from "../comon/modal/login-modal"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <header className="header-before-login">
                <div className="container">
                    <div className="header-row">
                        <div>
                            <Button className="btn btn-secondary" onClick={() => setLogin(true)}>Log In</Button>
                        </div>
                        <div>
                            <Link to={'/contact'}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </header>
            <LoginModal show={login} onHide={() => setLogin(false)} />
        </React.Fragment>
    )
}

export default Header