const initialState = {
    loading: false,
    meals: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SEARCH_RECIPES":
        return {
            ...state,
            loading: true
        };
        case "FETCH_SEARCH_RECIPES_SUCCESS":
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