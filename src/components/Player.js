import React from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import "./styles/Player.css"

const Player = ({spotify}) => {
    return(
        <div className="player">
            {console.log(spotify)} 
            <div className="player_body">
                <Sidebar/>
                <Body/>
            </div>
                <Footer/>
        </div>
    )
}
export default Player