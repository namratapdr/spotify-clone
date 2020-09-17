import React,{ useEffect , useState} from 'react'
import './App.css'
import Login from './components/Login'
import { getAccessToken } from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
//npm i spotify-web-api-js 
//https://github.com/JMPerez/spotify-web-api-js
import Player from './components/Player'
import {useDataLayerValue} from './DataLayer'


const spotifyOb = new SpotifyWebApi()

function App() {

    const [token , setToken] = useState(null)
    const [{user},dispatch] = useDataLayerValue()

    useEffect(() => {
      const hash = getAccessToken();
      window.location.hash=""
      const _token = hash.access_token

      if (_token){

        setToken (_token)
        
        spotifyOb.setAccessToken(_token) //spotify object from spotify WebApi Wrapper which helps us communicate with Spotify app

        spotifyOb.getMe().then(user => {
        
          dispatch(
            {
              type: 'SET_USER',
              user:user,
            }
          )
        })

      }

    
    },[])
    console.log("User: ",user)
  return (
    <div className="App">
      { token ?  <Player/> :  <Login/>}
    </div>
  );
}

export default App;


//useEffect Hook 
/**
 * It runs a piece of code based on a given condition
 * It runs a function given inside it
 * //we give [] to specify it to run it only once
 * //if we put a variable inside [name,age] the useEffect will run whenever the name var changes.
 */

 //Problem: Prop Drilling
 //Solution:Context API