//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

//initial State
const initState = {
    count: 5,
    message: "Hello Redux"
}

//Reducer(function)
const reducer = (state=initState, action) => {

    if(action.type === "INCR_CTR"){
        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...state,
            count: state.count - 1
        }
    }
    if(action.type === "UPD_CTR_BY"){
        return {
            ...state,
            count: state.count + action.payload
        }
    }

    return state;
}

//Store
const store = createStore(reducer);
console.log("State: ", store.getState());

//Subcribe

store.subscribe(() => {
    console.log("State Subscribe: ", store.getState());
});



//Dispatch Actions

store.dispatch({
    type: "INCR_CTR"
});
//console.log("State: ", store.getState());

store.dispatch({
    type: "DECR_CTR"
});
//console.log("State: ", store.getState());

store.dispatch({
    type: "UPD_CTR_BY",
    payload: 10

});
//console.log("State: ", store.getState());

