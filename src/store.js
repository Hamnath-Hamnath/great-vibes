import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";
import thunk from "redux-thunk";
import cardReducers from "./reducers/cardsReducer";
import modalReducer from "./reducers/modalReducer";

const initialState = {};

const composeEnchasers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    cards: cardReducers,
    modal: modalReducer
})

const store = createStore(reducer, initialState, composeEnchasers(applyMiddleware(thunk)))

export default store;