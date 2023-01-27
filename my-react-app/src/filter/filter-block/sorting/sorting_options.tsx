/* eslint-disable default-case */
import { SELECT_OPTIONS } from '../../../data/const';

function SortingOptions(selectOption, filmList) {
    switch (selectOption) {
        case SELECT_OPTIONS.PopularDescending: {
            return [...filmList]
                .sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
                .reverse();
        }

        case SELECT_OPTIONS.PopularAscending: {
            return [...filmList].sort((a, b) =>
                a.popularity > b.popularity ? 1 : -1
            );
        }

        case SELECT_OPTIONS.DescendingRanking: {
            return [...filmList]
                .sort((a, b) => (a.vote_average > b.vote_average ? 1 : -1))
                .reverse();
        }

        case SELECT_OPTIONS.RatingAscending: {
            return [...filmList].sort((a, b) =>
                a.vote_average > b.vote_average ? 1 : -1
            );
        }
    }
}

export { SortingOptions };
