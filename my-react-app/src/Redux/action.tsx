const FILM_LIST_LENGTH = 'FILM_LIST_LENGTH';
const SORTING_OPTIONS = 'SORTING_OPTIONS';
const SORTING_YEAR = 'SORTING_YEAR';
const FILTER_GENRES = 'FILTER_GENRES';
const DELETE_FILTER_GENRES = 'DELETE_FILTER_GENRES';
const ADD_FILTER_GENRES = 'ADD_FILTER_GENRES';
const RESET_FILTERS = 'RESET_FILTERS';
const AUTHORIZATION = 'AUTHORIZATION';
const MODAL_LOGIN = 'MODAL_LOGIN';
const WATCH_LATER = 'WATCH_LATER';
const FAVORITE = 'FAVORITE';
const TYPE_FILMS = 'TYPE_FILMS';
const VIEW_SAVE_FILMS = 'VIEW_SAVE_FILMS';
const DELETE_WATCH_LATER = 'DELETE_WATCH_LATER';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const ADD_COLOR_CURRENT_LIST = 'ADD_COLOR_CURRENT_LIST';
const SET_INITIAL_LIST = 'SET_INITIAL_LIST';

const actionCreator = (type) => (payload) => ({
    type,
    payload,
});

const setTotalPages = actionCreator(FILM_LIST_LENGTH);
const sortingOptions = actionCreator(SORTING_OPTIONS);
const sortingYear = actionCreator(SORTING_YEAR);
const filterGenres = actionCreator(FILTER_GENRES);
const deleteFilterGenres = actionCreator(DELETE_FILTER_GENRES);
const addFilterGenres = actionCreator(ADD_FILTER_GENRES);
const resetFilters = actionCreator(RESET_FILTERS);
const isAuthorization = actionCreator(AUTHORIZATION);
const isModalLogin = actionCreator(MODAL_LOGIN);
const watchLater = actionCreator(WATCH_LATER);
const favoriteFilm = actionCreator(FAVORITE);
const typeFilms = actionCreator(TYPE_FILMS);
const viewSaveFilms = actionCreator(VIEW_SAVE_FILMS);
const deleteWatchLater = actionCreator(DELETE_WATCH_LATER);
const deleteFavorite = actionCreator(DELETE_FAVORITE);
const addColorCurrentList = actionCreator(ADD_COLOR_CURRENT_LIST);
const setInitialList = actionCreator(SET_INITIAL_LIST);

export {
    setTotalPages,
    sortingOptions,
    sortingYear,
    filterGenres,
    deleteFilterGenres,
    addFilterGenres,
    resetFilters,
    isModalLogin,
    isAuthorization,
    watchLater,
    favoriteFilm,
    typeFilms,
    deleteWatchLater,
    deleteFavorite,
    viewSaveFilms,
    setInitialList,
    addColorCurrentList,
    FILM_LIST_LENGTH,
    SORTING_OPTIONS,
    SORTING_YEAR,
    FILTER_GENRES,
    DELETE_FILTER_GENRES,
    ADD_FILTER_GENRES,
    RESET_FILTERS,
    AUTHORIZATION,
    MODAL_LOGIN,
    WATCH_LATER,
    FAVORITE,
    TYPE_FILMS,
    VIEW_SAVE_FILMS,
    DELETE_WATCH_LATER,
    DELETE_FAVORITE,
    ADD_COLOR_CURRENT_LIST,
    SET_INITIAL_LIST,
};
