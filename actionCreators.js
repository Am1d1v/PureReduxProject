import getCurrentTime from "./utils/getCurrentTime.js";
import { ADD_CURRENT_TIME, CLEAR_ALL_TIME } from "./actionTypes.js";

 function addCurrentTime(){
    return{
        type: ADD_CURRENT_TIME,
        payload: getCurrentTime()
    }
}

function clearTime(){
    return{
        type: CLEAR_ALL_TIME,
    }
}

export {addCurrentTime, clearTime};