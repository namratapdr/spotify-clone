import React from 'react'
import "./styles/Header.css"
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
export const Header = () => {
    return(
        <header>
            <div className="header_left">
                <SearchIcon/>
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                    />
            </div>
            <div className="header_right"> 
            <Avatar src="" alt="NP" />
                <h4>Namrata </h4>
            </div>
        </header>
    )
}