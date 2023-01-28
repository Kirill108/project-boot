// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { isModalLogin, isAuthorization } from '../redux/action';
import { DUFAULT_VALUE, AUTHORIZATION } from '../data/const';
import './authorization.css';

function Authorization(): JSX.Element | null {
    const dispatch = useDispatch();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const isModalLogins = useSelector(
        (state) => state.authorization.isModalLogin
    );

    const closeModalLogin = () => {
        dispatch(isModalLogin(false));
    };

    const placeLogin = (event) => {
        setLogin(event?.target.value);
    };

    const placePassword = (event) => {
        setPassword(event?.target.value);
    };

    const isLogin = (event) => {
        event.preventDefault();
        if (
            login === AUTHORIZATION.LOGIN &&
            password === AUTHORIZATION.PASSWORD
        ) {
            dispatch(isAuthorization(true));
            dispatch(isModalLogin(false));
            localStorage.setItem('isAuthorization', 'true');
        } else {
            alert('Данные авторизации неверны! Попробуйте ещё раз :)');
        }

        setLogin(DUFAULT_VALUE);
        setPassword(DUFAULT_VALUE);
    };

    if (isModalLogins) {
        return (
            <div className="modal-window">
                <div className="modal-content">
                    <button
                        className="modal-button-exit"
                        type="button"
                        onClick={closeModalLogin}
                    >
                        +
                    </button>
                    <form className="modal-form" onSubmit={isLogin}>
                        <h1 className="modal-text">Введите данные для входа</h1>
                        <input
                            className="modal-login"
                            type="text"
                            placeholder="Введите логин"
                            value={login}
                            onChange={placeLogin}
                            required
                        />
                        <input
                            className="modal-password"
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={placePassword}
                            required
                        />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
    return null;
}

export { Authorization };
