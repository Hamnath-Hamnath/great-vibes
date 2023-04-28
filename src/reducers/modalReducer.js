import {
    HIDE_MODAL,
    SHOW_MODAL
} from "../constants/cardsConstants";
const initialState = {
    modalVisibility: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalVisibility: action.payload.modalVisibility,
                    id: action.payload.id
            };
        case HIDE_MODAL:
            return {
                ...state,
                modalVisibility: action.payload
            };
        default:
            return state;
    }
}