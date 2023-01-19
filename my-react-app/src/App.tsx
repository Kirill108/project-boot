import { useState } from 'react';
import './css/App.css';
import { Header } from './Header/Header';
import { MovieList } from './FilmList/MovieList';
import { Filter } from './filter/Filter';
import {
    PaginationContext,
    SetPaginationContext,
} from './context/paginationContext';

function App() {
    const [pageNow, setPageNow] = useState(0);
    return (
        <>
            <Header />
            <PaginationContext.Provider value={pageNow}>
                <div className="main">
                    <SetPaginationContext.Provider value={setPageNow}>
                        <Filter />
                    </SetPaginationContext.Provider>
                    <MovieList />
                </div>
            </PaginationContext.Provider>
        </>
    );
}

export default App;
