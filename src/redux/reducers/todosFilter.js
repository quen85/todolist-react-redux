const initialState = "none";

function todosFilter(state = initialState, action) {
    if(action.type === "SET_FILTER"){
        const newState = action.filter;
        return newState;
    }
    else{
        return state;
    }
}

export default todosFilter;