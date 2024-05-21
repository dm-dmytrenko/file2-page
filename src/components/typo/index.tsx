"use client"
import React from "react"

interface Typo {
    className?: string;
    children?: any;
}

export const Heading1 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h1
            className={`${className}`}
        >
            {children}
        </h1>
    )
}
export const Heading2 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h2
            className={`${className}`}
            {...props}
        >
            {children}
        </h2>
    )
}
export const Heading3 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h3
            className={`${className}`}
            {...props}
        >
            {children}
        </h3>
    )
}
export const Heading4 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h4
            className={`text-18 ${className}`}
            {...props}
        >
            {children}
        </h4>
    )
}

export const Heading4_0 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h4
            className={`text-18 ${className}`}
            {...props}
        >
            <a href="#new-comers">{children}</a>
        </h4>
    )
}

export const Heading4_1 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h4
            className={`text-18 ${className}`}
            {...props}
        >
            <a href="#important-notes">{children}</a>
        </h4>
    )
}

export const Heading5 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h5
            className={`${className}`}
            {...props}
        >
            {children}
        </h5>
    )
}
export const Heading6 = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <h6
            className={`${className}`}
            {...props}
        >
            {children}
        </h6>
    )
}
export const Paragraph = (params: Typo, { ...props }) => {
    const { className, children } = params
    return (
        <p
            {...props}
            className={`font-normal ${className}`}
        >
            {children}
        </p>
    )
}
