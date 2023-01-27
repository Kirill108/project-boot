import { useEffect } from 'react';

function useFilterCheckbox(event, argumentsCheckbox) {
    const { dataContext, copyFilmList, genre, setGenre } = argumentsCheckbox;

    const { filmList, setFilmList } = dataContext;
    const genreId = event.target.id;
    let allSorted = [];
    useEffect(() => {
        console.log('genre: ', genre);
        // if (genre.length) {
        //     setFilmList(
        //         genre.map((itemId) => {
        //             return [...copyFilmList].filter((item) => {
        //                 return item.genre_ids.includes(Number(itemId), 0);
        //             });
        //         })
        //     );
        // }
    }, [genre]);
    if (event.target.checked) {
        
        setGenre([...genre, genreId]);

        if (!genre.length) {
            setFilmList(
                [...copyFilmList].filter((item) =>
                    item.genre_ids.includes(Number(genreId), 0)
                )
            );
        } else {
            allSorted = genre.map((itemId) =>
                [...copyFilmList].filter((item) =>
                    item.genre_ids.includes(Number(itemId), 0)
                )
            );
        }
    }
    return {
        allSorted
    }
    // console.log('event.target.checked: ', event.target.checked);
}

export { useFilterCheckbox };
