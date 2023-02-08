import {
    FILM_LIST_LENGTH,
    AUTHORIZATION,
    MODAL_LOGIN,
    WATCH_LATER,
    FAVORITE,
    VIEW_SAVE_FILMS,
    DELETE_WATCH_LATER,
    DELETE_FAVORITE,
} from '../action';
import { filter } from './filter-reducers';
import { combineReducers } from 'redux';
import { LIST_NOW } from '../../data/const';
import { reducer } from './filter-reducers';

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

let isAuthorization;
try {
    isAuthorization = Boolean(localStorage.getItem('isAuthorization'));
} catch (error) {
    alert(error);
}

const AUTHORIZATIONS = {
    isAuthorization: isAuthorization ?? false,
    isModalLogin: false,
};

let watchLaterList;
let favoriteList;

try {
    watchLaterList = JSON.parse(localStorage.getItem('watchLater'));
    favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
} catch (error) {
    alert(error);
}

const favoriteFilms = {
    watchLater: watchLaterList ?? [],
    favorite: favoriteList ?? [],

    listNow: LIST_NOW.HOME,
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

function selectFilms(state = favoriteFilms, action) {
    switch (action.type) {
        case WATCH_LATER:
            return {
                ...state,
                watchLater: [...state.watchLater, action.payload],
            };

        case FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.payload],
            };

        case VIEW_SAVE_FILMS:
            return {
                ...state,
                listNow: action.payload,
            };

        case DELETE_WATCH_LATER:
            return {
                ...state,
                watchLater: state.watchLater.filter(
                    ({ id }) => action.payload !== id
                ),
            };

        case DELETE_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter(
                    ({ id }) => action.payload !== id
                ),
            };
        default:
            return state;
    }
}

function authorization(state = AUTHORIZATIONS, action) {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                ...state,
                isAuthorization: action.payload,
            };

        case MODAL_LOGIN:
            return {
                ...state,
                isModalLogin: action.payload,
            };
        default:
            return state;
    }
}

const filmsApp = combineReducers({
    films,
    filter,
    authorization,
    selectFilms,
    reducer,
});

export { filmsApp };
