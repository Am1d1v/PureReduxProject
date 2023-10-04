import * as ActionTypes from "./actionTypes.js";

const initialState = [];

function reducer(state = initialState, action){

    switch (action.type) {
        case ActionTypes.ADD_CURRENT_TIME:
            return [...state, action.payload];
        case ActionTypes.CLEAR_ALL_TIME:
            return [];
        default:
            return state;
    }
}

export default reducer;