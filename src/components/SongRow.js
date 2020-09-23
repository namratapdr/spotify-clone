import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import "./styles/SongRow.css"

export const SongRow = ({track}) => {
    const [{play_uri},dispatch] = useDataLayerValue()
   
    function handleClick(){
    
       dispatch(
            {
                type:'SET_PLAY_URI',
                play_uri:track.uri,
            }
        )
        dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
          
        if (play_uri )
        console.log("👍")
    }
    
    return(
        
        <div className="song_row" onClick={handleClick} >
            <img className="song_rowAlbum" src={track.album.images[0].url} alt=""></img>
            <div className="song_rowInfo">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name ).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}