import { useContext } from 'react';
import { useSelector } from 'react-redux';
import {
    PaginationContext,
    SetPaginationContext,
} from '../context/paginationContext';
import './PaginationBlock.css';

function PaginationBlock() {
    const pageNow = useContext(PaginationContext);
    const setPageNow = useContext(SetPaginationContext);
    const totalPages = useSelector((state) => state.filmListLength)

    const nextPage = () => {
        if (pageNow === Number(totalPages) - 1) {
            disabled = true;
        }
        setPageNow(pageNow + 1);
    };

    const previousPage = () => {
        if (!pageNow) {
            disabled = true;
        }
        setPageNow(pageNow - 1);
    };

    return (
        <div className="pageNow-container">
            <button
                className={pageNow ? `button-active` : 'button-disable'}
                type="button"
                onClick={previousPage}
                disabled={false}
            >
                Назад
            </button>
            <button
                className={
                    pageNow === Number(totalPages) - 1
                        ? 'button-disable'
                        : `button-active`
                }
                type="button"
                onClick={nextPage}
                disabled={false}
            >
                Вперед
            </button>
            <div className="page">
                {pageNow + 1} of {totalPages}
            </div>
        </div>
    );
}

export { PaginationBlock };
