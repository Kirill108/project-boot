/* eslint-disable default-case */
import { useContext, useEffect, useState } from 'react';
import { CheckboxGenre } from './CheckboxGenre';
import { movieGenres } from '../Data/movieGenres';
import { SELECT_OPTIONS, SELECT_YEAR } from '../Data/const';
import { PaginationContext } from '../context/paginationContext';

function FilterBlock() {
    const dataContext = useContext(PaginationContext);
    const { filmList, setFilmList } = dataContext;

    const [copyFilmList, setCopyFilmList] = useState(filmList);

    const checkboxMovieGenres = movieGenres.map((genres) => (
        <CheckboxGenre key={genres.id} genres={genres} />
    ));

    const sortingOptions = (event, inChange) => {
        const selectOption = event.target.value;
        switch (selectOption) {
            case SELECT_OPTIONS.PopularDescending: {
                setFilmList(
                    [...filmList]
                        .sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
                        .reverse()
                );
                break;
            }

            case SELECT_OPTIONS.PopularAscending: {
                setFilmList(
                    [...filmList].sort((a, b) =>
                        a.popularity > b.popularity ? 1 : -1
                    )
                );
                break;
            }

            case SELECT_OPTIONS.DescendingRanking: {
                setFilmList(
                    [...filmList]
                        .sort((a, b) =>
                            a.vote_average > b.vote_average ? 1 : -1
                        )
                        .reverse()
                );

                break;
            }

            case SELECT_OPTIONS.RatingAscending: {
                setFilmList(
                    [...filmList].sort((a, b) =>
                        a.vote_average > b.vote_average ? 1 : -1
                    )
                );
            }
        }
    };
    const sortingYear = (event) => {
        const selectYear = event.target.value;
        switch (selectYear) {
            case SELECT_YEAR.year2020: {
                setFilmList(
                    [...copyFilmList].filter(
                        (item) =>
                            SELECT_YEAR.year2020 ===
                            item.release_date.slice(0, 4)
                    )
                );
                break;
            }

            case SELECT_YEAR.year2019: {
                setFilmList(
                    [...copyFilmList].filter(
                        (item) =>
                            SELECT_YEAR.year2019 ===
                            item.release_date.slice(0, 4)
                    )
                );
                break;
            }

            case SELECT_YEAR.year2018: {
                setFilmList(
                    [...copyFilmList].filter(
                        (item) =>
                            SELECT_YEAR.year2018 ===
                            item.release_date.slice(0, 4)
                    )
                );
                break;
            }

            case SELECT_YEAR.year2017: {
                setFilmList(
                    [...copyFilmList].filter(
                        (item) =>
                            SELECT_YEAR.year2017 ===
                            item.release_date.slice(0, 4)
                    )
                );
            }
        }
    };

    const selectOption = Object.entries(SELECT_OPTIONS).map(([key, value]) => (
        <option>{value}</option>
    ));
    const selectYear = Object.entries(SELECT_YEAR).map(([key, value]) => (
        <option>{value}</option>
    ));
    // .reverse();

    return (
        <div className="filter-block">
            <div className="filter-text">Фильтры:</div>
            <button type="button" className="button-reset-filters">
                Cбросить все фильтры
            </button>
            <div className="text">Сортировать по:</div>
            <select onChange={sortingOptions}>{selectOption}</select>
            <div className="text">Год релиза:</div>
            <select onChange={sortingYear}>{selectYear}</select>
            <div className="genre-list">{checkboxMovieGenres}</div>
        </div>
    );
}

export { FilterBlock };
