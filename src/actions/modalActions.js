import {
    SHOW_MODAL
} from "../constants/cardsConstants"

export const showModal = (id) => async (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        payload: {
            modalVisibility : true,
            id : id
        }
    })
}
export const hideModal = () => async (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        payload: false
    })
}