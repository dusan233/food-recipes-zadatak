 const reducer = (state = JSON.parse(localStorage.getItem("auth")), action) => {
    switch(action.type) {
        case "LOG_IN":
            return true;
        case "LOG_OUT":
            return false;
        default:
            return state
    }
}

export default reducer;