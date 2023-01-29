import { useSelector, useDispatch } from 'react-redux';
import { isModalLogin } from '../redux/action';

function IsAuthorizationNow() {
    const dispatch = useDispatch();
    const isAuthorizations = useSelector(
        (state) => state.authorization.isAuthorization
    );

    if (!isAuthorizations) {
        dispatch(isModalLogin(true));
    }
}

export { IsAuthorizationNow };
