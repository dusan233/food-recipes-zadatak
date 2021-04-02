const initialState = {
    loading: false,
    meal: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SINGLE_MEAL":
            return {
                ...state,
                loading: true
            }
        case "FETCH_SINGLE_MEAL_SUCCESS":
            return {
                ...state,
                loading: false,
                meal: action.payload
            }
        default:
            return state
    }
}


export default reducer;