import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { isModalLogin, isAuthorization } from '../redux/action';
import { viewSaveFilms } from '../redux/action';
import { LS_KEY, LIST_NOW } from '../data/const';

function Header({ setPageNow }) {
    const dispatch = useDispatch();
    const isAuthorizations = useSelector(
        (state) => state.authorization.isAuthorization
    );

    const authorization = () => {
        dispatch(isModalLogin(true));
    };

    const exit = () => {
        dispatch(isAuthorization(false));
        localStorage.setItem('isAuthorization', '');
    };

    const favorite = () => {
        if (!isAuthorizations) {
            dispatch(isModalLogin(true));
        }
        dispatch(viewSaveFilms(LIST_NOW.FAVORITE));
    };

    const watchLater = () => {
        if (!isAuthorizations) {
            dispatch(isModalLogin(true));
        }
        dispatch(viewSaveFilms(LIST_NOW.WATCH_LATER));
    };

    const home = () => {
        // dispatch(viewSaveFilms(LIST_NOW.HOME));
    };

    const clearContainerFilm = (event) => {
        // event.target.parentNode.parentNode.nextSibling.lastChild
        setPageNow(0);
    };

    return (
        <div className="header">
            <div className="nav" onClick={clearContainerFilm}>
                <a href="#" onClick={home}>
                    Home
                </a>
                {/* <a href="#" className="nav-item-favorite" onClick={favorite}>
                    Избранные
                </a>
                <a
                    href="#"
                    className="nav-item-watch_later"
                    onClick={watchLater}
                >
                    Смотреть позже
                </a> */}
            </div>
            <div className="login-button">
                {isAuthorizations ? (
                    <button type="button" onClick={exit}>
                        Выйти
                    </button>
                ) : (
                    <button type="button" onClick={authorization}>
                        Войти
                    </button>
                )}
            </div>
        </div>
    );
}

export { Header };
