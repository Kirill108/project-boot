import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { MovieCard } from './MovieCard';
import './MovieList.css';
import { filmList } from '../Data/filmList.js';
import { PaginationContext } from '../context/paginationContext';
import { setTotalPages } from '../Redux/action';

function MovieList() {
    const JSXFilmList = filmList.map((film) => (
        <MovieCard key={film.id} film={film} />
    ));
    const dispatch = useDispatch();
    const moviesPerPage = 10;

    const totalPages = JSXFilmList.length / moviesPerPage;
    dispatch(setTotalPages(totalPages))

    const selectPage = useContext(PaginationContext);
    const startFrom = selectPage * moviesPerPage;

    const tenFilmList = JSXFilmList.slice(startFrom, startFrom + moviesPerPage);

    return <div className="container-movie-list">{tenFilmList}</div>;
}

export { MovieList };
