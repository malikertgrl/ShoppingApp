import {
    LOG_IN,
    LOG_OUT,
    SET_LOCALE
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