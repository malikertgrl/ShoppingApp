import {
    LOG_IN,
    LOG_OUT,
    SET_LOCALE,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    SET_TOTAL,
    SET_LOAD
} from "../action/actionTypes"


const initialState = {
    locale: "Tr",
    userInfo: {},
    basket: [],
    total: 0,
    loading: false
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
        case SET_TOTAL:
            return {
                ...state, total: action.payload
            }

        case SET_LOAD:
            return {
                ...state, loading: action.payload
            }

        default:
            return state;
    }

}

