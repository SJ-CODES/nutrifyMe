const initialState = {
    users: {}
    
}

const reducer = (state = initialState, action) => {

    if(action.type == 'LOGIN') {
        return {
            ...state,
            users: action.payload
        }
    }else{
        return state
    }
}

export default reducer