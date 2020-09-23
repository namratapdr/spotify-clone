import React from 'react'
import "./styles/SongRow.css"

export const SongRow = ({track}) => {
    return(
        <div className="song_row">
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