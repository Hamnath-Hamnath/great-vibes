import {
  createItems,
  deleteItems,
  editItems,
  readItems
} from "../api/crudAPI";
import {
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
} from "../constants/cardsConstants";

const getAllCards = () => async (dispatch) => {
  try {
    dispatch({
      type: DETAILS_REQUEST,
    });
    const data = await readItems();
    if (data.length) {
      dispatch({
        type: DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: DETAILS_FAILURE,
      error: error,
    });
  }
};

const createJobCard = (items) => async (dispatch, getState) => {
  try {
    const {
      cards
    } = getState();

    dispatch({
      type: DETAILS_REQUEST,
    });
    const data = await createItems(items)
    if (data.status === 201) {
      const updated_data = [...cards.cards, data.data]
      dispatch({
        type: DETAILS_SUCCESS,
        payload: updated_data,
      });
    }

  } catch (error) {
    dispatch({
      type: DETAILS_FAILURE,
      error: error,
    });
  }
}

const editJobCard = (items) => async (dispatch, getState) => {
  try {
    const {
      modal
    } = getState();
    const {
      id
    } = modal;
    dispatch({
      type: DETAILS_REQUEST,
    });
    const data = await editItems(id, items)
    if (data.status === 200) {
      const updated_data = await readItems()
      dispatch({
        type: DETAILS_SUCCESS,
        payload: updated_data,
      });
    }

  } catch (error) {
    dispatch({
      type: DETAILS_FAILURE,
      error: error,
    });
  }
}

const deleteJobCard = (id) => async (dispatch, getState) => {
  try {
    const {
      cards
    } = getState();

    dispatch({
      type: DETAILS_REQUEST,
    });
    const data = await deleteItems(id)

    if (data.statusText === "OK") {
      const updatedItems = cards.cards.filter((item) => item.id !== id);
      dispatch({
        type: DETAILS_SUCCESS,
        payload: updatedItems,
      });
    }

  } catch (error) {
    dispatch({
      type: DETAILS_FAILURE,
      error: error,
    });
  }
}

export {
  getAllCards,
  createJobCard,
  deleteJobCard,
  editJobCard
};
