/* eslint-disable default-case */
import { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxGenre } from './checkbox_filter/list_checkbox_genre';
import { movieGenres } from '../../data/movie_genres';
import {
    SELECT_OPTIONS,
    SELECT_YEAR,
    LIST_NOW,
    SELECT_FAVORITE,
} from '../../data/const';
import { PaginationContext } from '../../context/pagination_context';
import { getList } from './get_list';
import { setInitialList } from '../../redux/action';
import { dataFilmList } from '../../data/film_list';
import { initialFilmList } from '../../data/film_list';
import {
    sortingOptions,
    addFilterGenres,
    sortingYear,
    deleteFilterGenres,
    filterGenres,
    resetFilters,
} from '../../redux/reducers/filter-reducers';

function SortingBlock() {
    const dataContext = useContext(PaginationContext);
    const { filmList, setFilmList } = dataContext;
    const [selectType, setSelectType] = useState();
    const [selectYear, setSelectYear] = useState();
    const [selectFavorites, setSelecetFavorites] = useState();
    const dispatch = useDispatch();

    const resultFilmList = useSelector((state) => state.reducer.genres);
    const currentFilmList = useSelector((state) => state.reducer.currentList);
    const authorization = useSelector(
        (state) => state.authorization.isAuthorization
    );
    const defaultFilmList = useSelector((state) => state.reducer.defaultList);

    const listNow = useSelector((state) => state.selectFilms.listNow);
    const watchLater = useSelector((state) => state.selectFilms.watchLater);
    const favorite = useSelector((state) => state.selectFilms.favorite);

    setFilmList(currentFilmList);

    const sortingDefault = () => {
        dispatch(sortingOptions(SELECT_OPTIONS.PopularDescending));
        dispatch(sortingYear(SELECT_YEAR.year2020));
        dispatch(resetFilters(null));
        setSelectType(SELECT_OPTIONS.PopularDescending);
        setSelectYear(SELECT_YEAR.year2020);
    };

    const getOptions = (event) => {
        const selectOption = event.target.value;
        // if (listNow === LIST_NOW.HOME) {
        //     dispatch(setInitialList(initialFilmList));
        // } else if (listNow === LIST_NOW.WATCH_LATER) {
        //     dispatch(setInitialList(watchLater));
        // } else {
        //     dispatch(setInitialList(favorite));
        // }
        setSelectType(selectOption);
        dispatch(sortingOptions(selectOption));
    };

    const getYear = (event) => {
        const selectYear = event.target.value;
        // if (listNow === LIST_NOW.HOME) {
        //     dispatch(setInitialList(initialFilmList));
        // } else if (listNow === LIST_NOW.WATCH_LATER) {
        //     dispatch(setInitialList(watchLater));
        // } else {
        //     dispatch(setInitialList(favorite));
        // }
        setSelectYear(selectYear);
        dispatch(sortingYear(selectYear));
        if (selectType) {
            dispatch(sortingOptions(selectType));
        }
        dispatch(filterGenres(null));
    };

    const getTypeSorting = (event) => {
        const typeSorting = event.target.value;
        console.log('typeSorting: ', typeSorting);
        setSelecetFavorites(typeSorting);
    };

    const selectOptions = getList(SELECT_OPTIONS);
    const selectYears = getList(SELECT_YEAR);
    const selectFavorite = getList(SELECT_FAVORITE);

    const checkboxMovieGenres = movieGenres.map((genres) => (
        <CheckboxGenre
            key={genres.id}
            genres={genres}
            arrGenres={resultFilmList}
        />
    ));

    const activeCheckbox = (event) => {
        const genreId = Number(event.target.id);
        // if (listNow === LIST_NOW.HOME) {
        //     dispatch(setInitialList(initialFilmList));
        // } else if (listNow === LIST_NOW.WATCH_LATER) {
        //     dispatch(setInitialList(watchLater));
        // } else {
        //     dispatch(setInitialList(favorite));
        // }
        if (event.target.checked) {
            dispatch(addFilterGenres(genreId));
            dispatch(filterGenres(null));
        } else {
            dispatch(deleteFilterGenres(genreId));
            dispatch(filterGenres(null));
        }
    };

    return (
        <div className="filter-block">
            <div className="filter-text">Фильтры:</div>
            <p>
                <button
                    type="button"
                    className="button-reset-filters"
                    onClick={sortingDefault}
                >
                    Cбросить все фильтры
                </button>
            </p>
            <form id="select-form">
                {authorization ? (
                    <div className="text">
                        Сортировать по:
                        <select
                            onChange={getTypeSorting}
                            value={selectFavorites}
                        >
                            <option value="" disabled selected>
                                Выберите тип сортировки
                            </option>
                            {selectFavorite}
                        </select>
                    </div>
                ) : null}
                <div className="text">Сортировать по:</div>
                <select onChange={getOptions} value={selectType}>
                    {selectOptions}
                </select>
                <div className="text">Год релиза:</div>
                <select onChange={getYear} value={selectYear}>
                    {selectYears}
                </select>
            </form>
            <div className="genre-list" onChange={activeCheckbox}>
                {checkboxMovieGenres}
            </div>
        </div>
    );
}

export { SortingBlock };
