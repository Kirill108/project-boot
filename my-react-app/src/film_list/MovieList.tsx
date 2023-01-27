import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { MovieCard } from './MovieCard';
import './MovieList.css';
import { initialFilmList } from '../data/film_list.js';
import { PaginationContext } from '../context/pagination_context';
import { setTotalPages } from '../redux/action';

function MovieList() {
    const dataContext = useContext(PaginationContext);
    const { pageNow, filmList, setFilmList } = dataContext;

    let JSXFilmList = filmList;
    JSXFilmList = filmList.map((film) => (
        <MovieCard key={film.id} film={film} />
    ));
    const dispatch = useDispatch();
    const moviesPerPage = 10;

    const totalPages = JSXFilmList.length / moviesPerPage;
    dispatch(setTotalPages(totalPages));

    const selectPage = pageNow;
    const startFrom = selectPage * moviesPerPage;

    const tenFilmList = JSXFilmList.slice(startFrom, startFrom + moviesPerPage);

    return <div className="container-movie-list">{tenFilmList}</div>;
}

export { MovieList };
