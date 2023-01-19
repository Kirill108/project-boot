import { FILM_LIST_LENGTH } from './action';
// import { combineReducers } from 'redux';

interface film {
    type: string,
    payload: number
}

function films(state, action:film) {
    switch (action.type) {
        case FILM_LIST_LENGTH:
            return {
                ...state,
                filmListLength: action.payload,
            };
        default:
            return state;
    }
}

export {films}