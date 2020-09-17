export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item: null,
}//empty initialState

//https://reactjs.org/docs/hooks-reference.html#usereducer
//reducer = (state, action) => newState

export const reducer = (state , action) => {
    console.log(action)
    //Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
        //whenever there's a set_user reducer a new state where the user in the initial is set to user
            return {
                ...state, 
                user:action.user
            }
        default:
            return state //if nothing happens just returns state as it is
    }
   
}

