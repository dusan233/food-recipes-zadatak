const initialState = {
    loading: false,
    meals: [],
    recomendedMeal: {}
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
                meals: action.payload.meals,
                recomendedMeal: action.payload.recomendedMeal
            }
        default:
            return state
    }
}

export default reducer;