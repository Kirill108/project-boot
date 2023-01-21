/* eslint-disable default-case */
import { SELECT_YEAR } from '../../../Data/const';

function SortingYear(selectYear, dataContext, copyFilmList) {
    const { filmList, setFilmList } = dataContext;
	switch (selectYear) {
		case SELECT_YEAR.year2020: {
			setFilmList(
				[...copyFilmList].filter(
					(item) =>
						SELECT_YEAR.year2020 ===
						item.release_date.slice(0, 4)
				)
			);
			break;
		}

		case SELECT_YEAR.year2019: {
			setFilmList(
				[...copyFilmList].filter(
					(item) =>
						SELECT_YEAR.year2019 ===
						item.release_date.slice(0, 4)
				)
			);
			break;
		}

		case SELECT_YEAR.year2018: {
			setFilmList(
				[...copyFilmList].filter(
					(item) =>
						SELECT_YEAR.year2018 ===
						item.release_date.slice(0, 4)
				)
			);
			break;
		}

		case SELECT_YEAR.year2017: {
			setFilmList(
				[...copyFilmList].filter(
					(item) =>
						SELECT_YEAR.year2017 ===
						item.release_date.slice(0, 4)
				)
			);
		}
	}
}

export { SortingYear };
