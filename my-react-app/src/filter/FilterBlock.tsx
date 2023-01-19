import { CheckboxGenre } from './CheckboxGenre';
import { movieGenres } from '../Data/movieGenres';

function FilterBlock() {
    const checkboxMovieGenres = movieGenres.map((genres) => (
        <CheckboxGenre key={genres.id} genres={genres} />
    ));
    return (
        <div className="filter-block">
            <div className="filter-text">Фильтры:</div>
            <button type="button" className="button-reset-filters">
                Cбросить все фильтры
            </button>
            <div className="text">Сортировать по:</div>
            <select>
                <option>Популярные по убыванию</option>
                <option>Популярные по возрастанию</option>
                <option>избранные</option>
                <option>смотреть позже</option>
            </select>
            <div className="text">Год релиза:</div>
            <select>
                <option>2022</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
            </select>
            <div className="genre-list">
                {checkboxMovieGenres}
            </div>
        </div>
    );
}

export { FilterBlock };
