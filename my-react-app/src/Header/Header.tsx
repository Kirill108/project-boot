import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { isModalLogin, isAuthorization } from '../redux/action';

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

   

    return (
        <div className="header">
            <div className="nav">
                <a href="#">Home</a>
                <a href="#" className="nav-item-favorite">
                    Избранные
                </a>
                <a href="#" className="nav-item-watch_later">
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
