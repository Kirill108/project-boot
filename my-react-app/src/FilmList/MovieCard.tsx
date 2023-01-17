import './MovieCard.css';

function MovieCard() {
    return (
        <div>
            <div className="container-card">
                <div className="container-icon">
                    <img
                        src="/../public/Screenshot_1.jpg"
                        alt=""
                        className="film-icon"
                    />
                </div>
                <div className="card-content">
                    <div className="header-card">
                        <div className="film-rating">Рейтинг: 8.4</div>

                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect fill="none" height="256" width="256" />
                            <path
                                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                                opacity="0.2"
                            />
                            <path
                                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                                fill="#fff"
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            />
                        </svg>

                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect fill="#fff" height="256" width="256" />
                            <path
                                d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
                                opacity="0.2"
                                fill="#fff"
                            />
                            <path
                                d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
                                fill="none"
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            />
                        </svg>
                    </div>

                    <p className="film-title">
                        <strong>
                            Истребитель демонов: Поезд "Бесконечный"
                        </strong>
                    </p>
                    <button type="button" className="button-more_link">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
}

export { MovieCard };
