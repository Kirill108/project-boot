/* eslint-disable default-case */
import { SELECT_YEAR } from '../../../data/const';

function SortingYear(selectYear, filmList) {
    switch (selectYear) {
        case SELECT_YEAR.year2020: {
            return(
                [...filmList].filter(
                    (item) =>
                        SELECT_YEAR.year2020 === item.release_date.slice(0, 4)
                )
            );
        }

        case SELECT_YEAR.year2019: {
            return(
                [...filmList].filter(
                    (item) =>
                        SELECT_YEAR.year2019 === item.release_date.slice(0, 4)
                )
            );
        }

        case SELECT_YEAR.year2018: {
            return(
                [...filmList].filter(
                    (item) =>
                        SELECT_YEAR.year2018 === item.release_date.slice(0, 4)
                )
            );
        }

        case SELECT_YEAR.year2017: {
            return(
                [...filmList].filter(
                    (item) =>
                        SELECT_YEAR.year2017 === item.release_date.slice(0, 4)
                )
            );
        }
    }
}

export { SortingYear };
