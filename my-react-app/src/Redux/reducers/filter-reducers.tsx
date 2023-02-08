/* eslint-disable no-param-reassign */

import {
    SORTING_OPTIONS,
    SORTING_YEAR,
    FILTER_GENRES,
    DELETE_FILTER_GENRES,
    ADD_FILTER_GENRES,
    RESET_FILTERS,
    SET_INITIAL_LIST,
} from '../action';
import { initialFilmList } from '../../data/film_list';
import { dataFilmList } from '../../data/film_list';
import { SortingOptions } from '../../filter/filter-block/sorting/sorting_options';
import { SortingYear } from '../../filter/filter-block/sorting/sorting_year';
import { LS_KEY, LIST_NOW } from '../../data/const';
import { createSlice } from '@reduxjs/toolkit';

const dataFilter = {
    initialList: dataFilmList,
    currentList: initialFilmList,
    defaultList: initialFilmList,
    filterList: initialFilmList,

    sortBy: '',
    genres: [],
    year: '',
};

const filmFilter = createSlice({
    name: 'filter',
    initialState: dataFilter,
    reducers: {
        // setInitialList: (state, action) => {
        //     state.initialList = action.payload
        // }
        sortingOptions: (state, action) => {
            state.currentList = SortingOptions(
                action.payload,
                state.currentList
            );
            state.filterList = SortingOptions(
                action.payload,
                state.currentList
            );
            state.sortBy = action.payload;
        },

        sortingYear: (state, action) => {
            state.currentList = SortingYear(action.payload, state.initialList);
            state.filterList = SortingYear(action.payload, state.initialList);
            state.year = action.payload;
        },

        addFilterGenres: (state, action) => {
            state.genres.push(action.payload);
        },

        deleteFilterGenres: (state, action) => {
            state.genres = state.genres.filter((id) => action.payload !== id);
        },

        filterGenres: (state) => {
            state.currentList = state.filterList.filter((item) =>
                state.genres.every((id) => item.genre_ids.includes(id))
            );
        },

        resetFilters: (state) => {
            state.genres = [];
        },
    },
});

const { actions, reducer } = filmFilter;
const {
    sortingOptions,
    sortingYear,
    addFilterGenres,
    deleteFilterGenres,
    filterGenres,
    resetFilters,
} = actions;

function filter(state = dataFilter, action) {
    switch (action.type) {
        case SET_INITIAL_LIST: {
            return {
                ...state,
                initialList: action.payload,
                currentList: action.payload,
                defaultList: action.payload,
                filterList: action.payload,
            };
        }

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

export {
    filter,
    reducer,
    sortingOptions,
    sortingYear,
    addFilterGenres,
    deleteFilterGenres,
    filterGenres,
    resetFilters,
};
