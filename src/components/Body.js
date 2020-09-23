import { PlayCircleFilled } from '@material-ui/icons'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import { Header } from './Header'
import {SongRow } from './SongRow'
import "./styles/Body.css"

export const Body = ({spotify}) => {
    const [{discover_weekly} , dispatch] = useDataLayerValue()
    return (
        <div className="body">
            <Header spotify/>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="banner"></img>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle"/>

                    <FavoriteBorderIcon fontSize="large" />
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item=> <SongRow track={item.track}/>)}
            </div>
        </div>
    )
}