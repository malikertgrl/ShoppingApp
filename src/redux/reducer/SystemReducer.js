import {
    LOG_IN,
    LOG_OUT,
    SET_LOCALE,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
} from "../action/actionTypes"


const initialState = {
    locale: "Tr",
    userInfo: {},
    basket: []
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

        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item != action.payload)
            }
        default:
            return state;
    }

}

