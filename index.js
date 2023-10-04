import store from "./redux/store.js";
import { addCurrentTime, clearTime } from "./redux/actionCreators.js";

/*
//console.log(store.getState());

const unsubscribe =  store.subscribe(() => {
    console.log(`Redux store just changed ${store.getState()}`);
})

store.dispatch({
    type: 'Add_Current_Time',
    payload: '15: 00'
});
//console.log(store.getState());


store.dispatch({
    type: 'Add_Current_Time',
    payload: '16: 00'
});
//console.log(store.getState());

unsubscribe();

store.dispatch({
    type: 'Clear_All_Times'
})
//console.log(store.getState());
*/

const addTimeBtn = document.getElementById('addTime');
addTimeBtn.addEventListener('click', () => {
    store.dispatch(addCurrentTime());
    console.log(store.getState());
})

const timesList = document.getElementById('timesList');

store.subscribe(() => {
    timesList.innerHTML = '';
   const times = store.getState();
   times.forEach((time) => {
        let li = document.createElement('li');
        li.innerText = time;
        timesList.appendChild(li);
   })
})


const clearTimeBtn = document.getElementById('clearTime');
clearTimeBtn.addEventListener('click', () => {
    store.dispatch(clearTime());
    console.log(store.getState());
});
