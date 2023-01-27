import {
    FILM_LIST_LENGTH,
    SORTING_OPTIONS,
    SORTING_YEAR,
    FILTER_GENRES,
    DELETE_FILTER_GENRES,
    ADD_FILTER_GENRES,
    RESET_FILTERS,
} from './action';
import { combineReducers } from 'redux';
import { initialFilmList } from '../data/film_list';
import { dataFilmList } from '../data/film_list';
import { SortingOptions } from '../filter/filter-block/sorting/sorting_options';
import { SortingYear } from '../filter/filter-block/sorting/sorting_year';

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

const dataFilter = {
    initialList: dataFilmList,
    currentList: initialFilmList,
    defaultList: initialFilmList,
    filterList: initialFilmList,

    sortBy: '',
    genres: [],
    year: '',
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

function filter(state = dataFilter, action) {
    switch (action.type) {
        case SORTING_OPTIONS:
            return {
                ...state,
                currentList: SortingOptions(action.payload, state.currentList),
                filterList: SortingOptions(action.payload, state.currentList),
                sortBy: action.payload,
            };

        case SORTING_YEAR: {
            return {
                ...state,
                currentList: SortingYear(action.payload, state.initialList),
                filterList: SortingYear(action.payload, state.initialList),
                year: action.payload,
            };
        }

        case ADD_FILTER_GENRES: {
            return {
                ...state,
                genres: [...state.genres, action.payload],
            };
        }

        case DELETE_FILTER_GENRES: {
            return {
                ...state,
                genres: state.genres.filter((id) => action.payload !== id),
            };
        }

        case FILTER_GENRES: {
            return {
                ...state,
                currentList: state.filterList.filter((item) =>
                    state.genres.every((id) => item.genre_ids.includes(id))
                ),
            };
        }

        case RESET_FILTERS: {
            return {
                ...state,
                genres: [], 
            };
        }

        
        default:
            return state;
    }
}

const filmsApp = combineReducers({
    films,
    filter,
});

export { filmsApp };
