import {
    DETAILS_FAILURE,
    DETAILS_REQUEST,
    DETAILS_SUCCESS
} from "../constants/cardsConstants";

export default function cardReducers(state = {
    cards: []
}, action) {
    switch (action.type) {
        case DETAILS_REQUEST:
            return {
                loading: true,
                    cards: []
            };
        case DETAILS_SUCCESS:
            return {
                loading: false,
                    cards: action.payload
            };
        case DETAILS_FAILURE:
            return {
                loading: false,
                    error: action.payload
            };

        default:
            return state;
    }
}