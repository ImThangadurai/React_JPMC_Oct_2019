import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//initial State
const initState = {
    count: 5,
    message: "Hello Redux",
    customers: [],
    isAuth: true
}

//Reducer(function)
const reducer = (state=initState, action) => {

    if(action.type === "SET_AUTH_TRUE"){
        return {
            ...state,
            isAuth: true
        }
    }

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
    if(action.type === "FETCH_CUSTOMERS"){
        return {
            ...state,
            customers: action.payload
        }
    }

    return state;
}

//Middleware

const logger = (store)=>{
    return (next) => {

        return (action)=>{

            console.log("Action: ", action);
            console.log("State before: ", store.getState());
            const result = next(action);  
            console.log("State after: ", store.getState());
            return result;
        }
    }
}


//Store
//export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
//export const store = createStore(reducer, applyMiddleware(logger, thunk));