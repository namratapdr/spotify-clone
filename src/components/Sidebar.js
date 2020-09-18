import React from 'react'
import { SidebarOption } from './SidebarOption'
import "./styles/Sidebar.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>
            <SidebarOption option="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption option="Search" Icon={SearchIcon}/>
            <SidebarOption option="Your Library" Icon={LibraryMusicOutlinedIcon}/>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>
        </div>
    )
}