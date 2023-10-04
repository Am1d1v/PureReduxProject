import getCurrentTime from "./utils/getCurrentTime.js";

 function addCurrentTime(){
    return{
        type: 'Add_Current_Time',
        payload: getCurrentTime()
    }
}

function clearTime(){
    return{
        type: 'Clear_All_Times',
    }
}

export {addCurrentTime, clearTime};