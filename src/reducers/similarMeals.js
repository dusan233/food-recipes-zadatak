const reducer = (state = [], action) => {
    switch(action.type) {
        case "SET_SIMILAR_MEALS":
            return action.payload
        default:
            return state
    }
}


export default reducer;