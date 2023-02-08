import { useContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from './movie_card';
import './movie_list.css';
import { initialFilmList } from '../data/film_list.js';
import { PaginationContext } from '../context/pagination_context';
import { setTotalPages } from '../redux/action';
import { RenderFilm } from './renderFilm';

function MovieList() {
    const dataContext = useContext(PaginationContext);
    const { pageNow, filmList, setFilmList } = dataContext;
    let filmListRender;

    let favoriteFilm = useSelector((state) => state.selectFilms.favorite);
    let watchLater = useSelector((store) => store.selectFilms.watchLater);
    const whatFilms = useSelector((store) => store.selectFilms.listNow)

    let JSXFilmList = filmList;
    JSXFilmList = filmList.map((film) => (
        <MovieCard key={film.id} film={film} />
    ));
    favoriteFilm = favoriteFilm.map((film) => (
        <MovieCard key={film.id} film={film} />
    ));

    watchLater = watchLater.map((film) => (
        <MovieCard key={film.id} film={film} />
    ));

    if(whatFilms === 'home') {
        filmListRender = <RenderFilm filmList={JSXFilmList} />
    } else if(whatFilms === 'favorite') {
        filmListRender = <RenderFilm filmList={favoriteFilm} />
    } else {
        filmListRender = <RenderFilm filmList={watchLater} />
    }

    return (
        <div className="container-movie-list">
            {filmListRender}
        </div>
    );
}

export { MovieList };
