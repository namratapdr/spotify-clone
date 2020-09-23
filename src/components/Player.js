import React from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import "./styles/Player.css"

const Player = ({spotify}) => {
    return(
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
                <Footer spotify={spotify}/>
        </div>
    )
}
export default Player