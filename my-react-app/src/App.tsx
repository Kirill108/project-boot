import { useEffect, useState } from 'react';
import './css/App.css';
import { Header } from './Header/Header';
import { MovieList } from './FilmList/MovieList';
import { Filter } from './filter/Filter';
import {
    PaginationContext,
    SetPaginationContext,
} from './context/paginationContext';
import { dataFilmList } from './Data/filmList';

function App() {
    const [pageNow, setPageNow] = useState(0);
    const [filmList, setFilmList] = useState(dataFilmList);
    
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const dataContext = {
        pageNow,
        filmList,
        setFilmList,
    };

    // useEffect(() => {
    //     console.log('effect')
    //     console.log('filmList: ', filmList);
    // }, [filmList])

    return (
        <>
            <Header />
            <PaginationContext.Provider value={dataContext}>
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
