import * as ActionTypes from './ActionTypes'
export const increaseAge = (text) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: text
    }
};

export const decreaseAge = (text) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: text
    }
};