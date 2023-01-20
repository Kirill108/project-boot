import './MovieCard.css';

interface filmProps {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

function MovieCard(props: { film: filmProps }) {
    const { film } = props;
    const imagePath = film.poster_path || film.backdrop_path;
    return (
        <div>
            <div className="container-card">
                <div className="container-icon">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
                        alt=""
                        className="film-icon"
                    />
                </div>
                <div className="card-content">
                    <div className="header-card">
                        <div className="film-rating">
                            Рейтинг: {film.vote_average} {film.release_date}
                        </div>
                        <div className="container-svg">
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                />
                            </svg>
                        </div>
                    </div>

                    <p className="film-title">
                        <strong>{film.title}</strong>
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
