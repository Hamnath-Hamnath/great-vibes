import {
    createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import cardReducers from "./reducers/cardsReducer";
import modalReducer from "./reducers/modalReducer";

const initialState = {};

const reducer = combineReducers({
    cards: cardReducers,
    modal: modalReducer
})

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store;