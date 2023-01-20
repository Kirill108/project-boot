import { FILM_LIST_LENGTH } from './action';
// import { combineReducers } from 'redux';

interface film {
    type: string;
    payload: number;
}

interface State {
    filmListLength: number;
}

const initialState: State = {
    filmListLength: 1,
};

// eslint-disable-next-line default-param-last
function films(state = initialState, action: film) {
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

export { films };
