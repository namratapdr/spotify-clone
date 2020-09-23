// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri =window.location.origin + '/'

const clientId = "b520e14a69d84d1692b7579b03d3d74d"

const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
]

export const getAccessToken = () =>{
  return window.location.hash
  .substring(1)//removing the # in the string
  .split('&')//spliting the access token string from the other post varaibles
  .reduce((initial,item) => {
    let parts = item.split('=')
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  },{})
  
  /**
   * reduce() method reduces the array to a single value.
   * The reduce() method executes a provided function for each value of the array (from left-to-right).
   * The return value of the function is stored in an accumulator (total/initial).
   * initial is the initialValue, or the previously returned value of the function
   * item is the value of the current element
   * 
   * parts is spiliting the string into before = and after
   * then initial is set to a single value i.e parts[1]
   * then reduce() method returns a single value to the getAccessToken variable
   * 
   * decodeURIComponent()???
   * 
   */
}


//https://developer.spotify.com/documentation/general/guides/authorization-guide/
export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`