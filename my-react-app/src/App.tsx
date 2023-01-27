import { useEffect, useState } from 'react';
import './css/App.css';
import { Header } from './header/header';
import { MovieList } from './film_list/MovieList';
import { Filter } from './filter/filter';
import {
    PaginationContext,
    SetPaginationContext,
} from './context/pagination_context';
import { dataFilmList } from './data/film_list';

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
