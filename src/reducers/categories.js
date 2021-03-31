const initialState = {
    loading: false,
    categoriesList: []
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case "FETCH_CATEGORIES":
         return {
             ...state,
             loading: true,
         };
        case "FETCH_CATEGORIES_SUCCESS":
         return {
             ...state,
             categoriesList: action.payload,
             loading: false
         }
        default:
            return state
    }
}

export default reducer;