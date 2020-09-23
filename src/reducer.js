export const initialState = {
    user:null,
    playlists:[],
    discover_weekly: null,
    top_artists: null,
    playing:false,
    item: null,
    token:null,
    play_uri:"spotify:playlist:37i9dQZEVXcIdICMRECAXa",
    //enter your own discover weekly uri before production
}//empty initialState

//https://reactjs.org/docs/hooks-reference.html#usereducer
//reducer = (state, action) => newState

export const reducer = (state , action) => {
    //console.log(action)
    //Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
        //whenever there's a set_user reducer a new state where the user in the initial is set to user
            return {
            /**
             * this syntax is part of ES6 and not React itself and it's used by two operators - the Spread and Rest operators.
                The Spread operator lets you expand an iterable like a string, object or array into its elements while the Rest operator does the inverse by reducing a set of elemnts into one array.
             */
                ...state, 
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists:action.playlists,
           
          }
          case 'SET_DISCOVER_WEEKLY':
            return{
              ...state,
              discover_weekly:action.discover_weekly,
            }
          case 'SET_TOP_ARTISTS':
            return{
              ...state,
              top_artists:action.top_artists,
            }
            case "SET_PLAYING":
              return {
                ...state,
                playing: action.playing,
              }
        
            case "SET_ITEM":
              return {
                ...state,
                item: action.item,
              }
            case "SET_PLAY_URI":
              return{
                ...state,
                play_uri:action.play_uri
              }
        default:
            return state //if nothing happens just returns state as it is
    }
   
}

/**
 * this.state = {
  stateObj: {
    attr1: '',
    attr2: '',
  },
}
You can use the Spread syntax to update the nested state object.

this.setState(state => ({
  person: {
    ...state.stateObj,
    attr1: 'value1',
    attr2: 'value2',
  },
}))
The Rest Ope
 */
