import React from 'react'
import { Header } from './Header'
import "./styles/Body.css"

export const Body = ({spotify}) => {
    return (
        <div className="body">
            <Header spotify/>
        </div>
    )
}