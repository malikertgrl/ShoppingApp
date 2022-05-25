import {
    LOG_IN,
    LOG_OUT,
    SET_LOCALE,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from "./actionTypes"

//log-In
export const logIn = (item) => (dispatch) => {
    dispatch({
        type: LOG_IN,
        payload: item
    });
}

//log-Out
export const logOut = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
    });
}
// set Locale
export const setLocale = (val) => (dispatch) => {
    dispatch({
        type: SET_LOCALE,
        payload: val

    });
}

//add_to_basket

export const addToBasket = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: item
    })
}

//remove from basket

export const removeFromBasket = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_BASKET,
        payload: item
    })
}