/* eslint-disable default-case */
import { useContext, useState, useEffect } from 'react';
import { CheckboxGenre } from './CheckboxGenre/CheckboxGenre';
import { movieGenres } from '../../Data/movieGenres';
import { SELECT_OPTIONS, SELECT_YEAR } from '../../Data/const';
import { PaginationContext } from '../../context/paginationContext';
import { SortingOptions } from './sorting/sortingOptions';
import { SortingYear } from './sorting/sortingYear';
import { getList } from './getList';

function SortingBlock() {
    const dataContext = useContext(PaginationContext);
    const { filmList, setFilmList } = dataContext;
    const [copyFilmList, setCopyFilmList] = useState(filmList);
    // const [selectOption, setSelectOption] = useState();
    // const [selectYear, setSelectYear] = useState();

    const checkboxMovieGenres = movieGenres.map((genres) => (
        <CheckboxGenre key={genres.id} genres={genres} />
    ));

    const sortingDefault = () => {
        SortingOptions(SELECT_OPTIONS.PopularAscending, dataContext);
        SortingYear(SELECT_YEAR.year2020, dataContext, copyFilmList);
        // setSelectOption(SELECT_OPTIONS.PopularAscending)
        // setSelectYear(SELECT_YEAR.year2020)
    };

    useEffect(() => {
        sortingDefault();
    }, []);

    const getOptions = (event) => {
        const selectOption = event.target.value;
        SortingOptions(selectOption, dataContext);
    };

    const getYear = (event) => {
        const selectYear = event.target.value;
        SortingYear(selectYear, dataContext, copyFilmList);
    };

    const selectOptions = getList(SELECT_OPTIONS)
    const selectYears = getList(SELECT_YEAR)

    return (
        <div className="filter-block">
            <div className="filter-text">Фильтры:</div>
            <button
                type="reset"
                from="select-form"
                className="button-reset-filters"
                onClick={sortingDefault}
            >
                Cбросить все фильтры
            </button>
            <form id="select-form">
                <div className="text">Сортировать по:</div>
                <select onChange={getOptions}>{selectOptions}</select>
                <div className="text">Год релиза:</div>
                <select onChange={getYear}>{selectYears}</select>
            </form>
            <div className="genre-list">{checkboxMovieGenres}</div>
        </div>
    );
}

export { SortingBlock };
