import { FILM_LIST_LENGTH } from './action';
// import { combineReducers } from 'redux';

function films(state, action) {
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