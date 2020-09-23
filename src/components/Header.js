import React from 'react'
import "./styles/Header.css"
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import {useDataLayerValue} from '../DataLayer'

export const Header = () => {
    const [{user}] = useDataLayerValue()
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
            <Avatar src={user?.images[0]?.url} alt="NP" />
                <h4>{user?.display_name} </h4>
            </div>
        </header>
    )
}