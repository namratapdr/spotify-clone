export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item: null,
    token:"BQBsHxqRTAdgED4QP4HCcZJ4-hgYzCZkKSWemHxIxmf_yyKbJkDRoa0ctdLHP_OyWm6-r5oZfrWERfHiVgFuh1wTVECFJysCZbNB0GznpsfvAky3N42pNvIzw5Zw5XvCiPWpA6EJSQCeePQtK6BEKuc2MOA",
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
