import './Header.css';
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

    console.log('isAuthorizations: ', isAuthorizations);

    return (
        <div className="header">
            <a href="#">Home</a>
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
    );
}

export { Header };
