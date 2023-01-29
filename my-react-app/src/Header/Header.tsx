import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { isModalLogin, isAuthorization } from '../redux/action';
import { IsAuthorizationNow } from '../helper/is_authorizations';

function Header() {
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
        IsAuthorizationNow();
    };

    const watchLater = () => {
        IsAuthorizationNow();
    };

    return (
        <div className="header">
            <div className="nav">
                <a href="#">Home</a>
                <a href="#" className="nav-item-favorite" onClick={favorite}>
                    Избранные
                </a>
                <a
                    href="#"
                    className="nav-item-watch_later"
                    onClick={watchLater}
                >
                    Смотреть позже
                </a>
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
