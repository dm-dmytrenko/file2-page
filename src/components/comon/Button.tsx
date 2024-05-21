"use client"
import React from "react"

interface Typo {
    className? :string;
    children?:any;
    onClick?:any,
}

export const Button = (params:Typo, {...props}) => {
    const {className, children, onClick} = params
    return (
        <button
            {...props}
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}