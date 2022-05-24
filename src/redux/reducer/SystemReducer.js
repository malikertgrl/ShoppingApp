import {
    LOG_IN,
    LOG_OUT,
    SET_LOCALE
} from "../action/actionTypes"


const initialState = {
    locale: "Tr",
    userInfo: {},
}


export const SystemReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state, userInfo: action.payload
            }

        case LOG_OUT:
            return {
                ...state, userInfo: {}
            }
        case SET_LOCALE:
            return { ...state, locale: action.payload }
        default:
            return state;
    }

}

