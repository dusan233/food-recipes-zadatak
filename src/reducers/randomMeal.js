const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_RANDOM_MEAL":
            return action.payload
        default:
            return state
    }
}


export default reducer;