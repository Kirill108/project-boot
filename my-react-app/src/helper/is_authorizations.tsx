import { useSelector, useDispatch } from 'react-redux';
import { isModalLogin } from '../redux/action';

function if (!isAuthorizations) {
        dispatch(isModalLogin(true));
    }() {
    const dispatch = useDispatch();
    const isAuthorizations = useSelector(
        (state) => state.authorization.isAuthorization
    );

    if (!isAuthorizations) {
        dispatch(isModalLogin(true));
    }

    return null;
}

export { if (!isAuthorizations) {
        dispatch(isModalLogin(true));
    } };
