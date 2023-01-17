import { useState } from 'react';
import './css/App.css';
import { Header } from './Header';
import { MovieList } from './MovieList';
import { Filter } from './Filter';

function App() {
    return (
        <>
            <Header />
            <MovieList />
            <Filter/>
        </>
    );
}

export default App;
