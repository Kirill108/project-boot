/* eslint-disable default-case */
import { SELECT_OPTIONS } from '../../../Data/const';

function SortingOptions(selectOption, dataContext) {
    const { filmList, setFilmList } = dataContext;
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
                    .sort((a, b) => (a.vote_average > b.vote_average ? 1 : -1))
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
}

export { SortingOptions };
