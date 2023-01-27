/* eslint-disable default-case */
import { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxGenre } from './checkbox_filter/list_checkbox_genre';
import { movieGenres } from '../../data/movie_genres';
import { SELECT_OPTIONS, SELECT_YEAR } from '../../data/const';
import { PaginationContext } from '../../context/pagination_context';
import { getList } from './get_list';
import {
    sortingOptions,
    sortingYear,
    filterGenres,
    deleteFilterGenres,
    addFilterGenres,
    resetFilters,
} from '../../redux/action';

function SortingBlock() {
    const dataContext = useContext(PaginationContext);
    const { filmList, setFilmList } = dataContext;
    const [selectType, setSelectType] = useState();
    const [selectYear, setSelectYear] = useState();
    const dispatch = useDispatch();

    const resultFilmList = useSelector((state) => state.filter.genres);
    console.log('resultFilmList: ', resultFilmList);
    const currentFilmList = useSelector((state) => state.filter.currentList);
    const defaultFilmList = useSelector((state) => state.filter.defaultList);
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
        setSelectType(selectOption);
        dispatch(sortingOptions(selectOption));
    };

    const getYear = (event) => {
        const selectYear = event.target.value;
        setSelectYear(selectYear);
        dispatch(sortingYear(selectYear));
        if (selectType) {
            dispatch(sortingOptions(selectType));
        }
        dispatch(filterGenres(null));
        
    };

    const selectOptions = getList(SELECT_OPTIONS);
    const selectYears = getList(SELECT_YEAR);
    const checkboxMovieGenres = movieGenres.map((genres) => (
        <CheckboxGenre key={genres.id} genres={genres} arrGenres={resultFilmList}/>
    ));

    const activeCheckbox = (event) => {
        const genreId = Number(event.target.id);
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
            <button
                type="button"
                className="button-reset-filters"
                onClick={sortingDefault}
            >
                Cбросить все фильтры
            </button>
            <form id="select-form">
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
