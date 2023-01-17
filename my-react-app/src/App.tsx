import { useState } from 'react';
import './css/App.css';
import { Header } from './Header/Header';
import { MovieList } from './FilmList/MovieList';
import { Filter } from './filter/Filter';

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <Filter />
                <MovieList />
            </div>
        </>
    );
}

export default App;
