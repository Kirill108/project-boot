function FilterBlock() {
    return (
        <div className="filter-block">
            <div className="filter-text">Фильтры:</div>
            <button type="button" className="button-reset-filters">Cбросить все фильтры</button>
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
                <div>
                    <input
                        type="checkbox"
                        id="actionMovie"
                        name="actionMovie"
                    />
                    <label for="actionMovie">боевик</label>
                </div>
                <div>
                    <input type="checkbox" id="adventure" name="adventure" />
                    <label for="adventure">приключения</label>
                </div>
                <div>
                    <input type="checkbox" id="cartoon" name="cartoon" />
                    <label for="cartoon">мультфильм</label>
                </div>
                <div>
                    <input type="checkbox" id="comedy" name="comedy" />
                    <label for="comedy">комедия</label>
                </div>
            </div>
        </div>
    );
}

export { FilterBlock };
