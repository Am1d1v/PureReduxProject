import store from "./redux/store.js";
import getCurrentTime from "./redux/utils/getCurrentTime.js";


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

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    store.dispatch({
        type: 'Add_Current_Time',
        payload: getCurrentTime()
    });
    console.log(store.getState());
})