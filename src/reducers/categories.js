const initialState = {
    loading: false,
    categories: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CATEGORIES":
         return {
             ...state,
             loading: true,
         }
        case "FETCH_CATEGORIES_SUCCESS":
         return {
             ...state,
             categories: action.payload,
             loading: false
         }
        default:
            return state
    }
}

export default reducer;