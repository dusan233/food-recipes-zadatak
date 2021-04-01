const initialState = {
    loading: false,
    meals: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CATEGORY_MEALS":
            return {
                ...state,
                loading: true
            }
        case "FETCH_CATEGORY_MEALS_SUCCESS":
            return {
                ...state,
                loading: false,
                meals: action.payload
            }
        default:
            return state
    }
}

export default reducer;