

const initialState = [];

function reducer(state = initialState, action){

    switch (action.type) {
        case 'Add_Current_Time':
            return [...state, action.payload];
        case 'Clear_All_Times':
            return [];
        default:
            return state;
    }
}

export default reducer;