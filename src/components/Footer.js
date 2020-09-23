import React,{useEffect} from 'react'
import "./styles/Footer.css"
/*import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import { Grid, Slider } from "@material-ui/core"*/
import { useDataLayerValue } from '../DataLayer'
import SpotifyPlayer from 'react-spotify-web-playback'

export const Footer =({spotify})=>{
    const [{ token, item, playing }, dispatch] = useDataLayerValue()


    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r)
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
        })
      }, [spotify,dispatch])

    /*  const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        }
      }

      const skipNext = () => {
        spotify.skipToNext()
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      }

      const skipPrevious = () => {
        spotify.skipToPrevious()
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      }*/
    return(
        <footer >
            <div className="footer_player_container">
            <SpotifyPlayer
                name='Spotify-clone'
                token={token}
                uris={['spotify:playlist:37i9dQZEVXcIdICMRECAXa']}
                styles={{
                    bgColor: ' #282828',
                    color: '#fff',
                    loaderColor: '#1DB954',
                    sliderColor: '#1DB954',
                    savedColor: '#fff',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                    loaderSize:1.5,
                    sliderHandleColor: "#fff"
                  }}
                play={playing}
                />
            </div>
        </footer>
    )
}