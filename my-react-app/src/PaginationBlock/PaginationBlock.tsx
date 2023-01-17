import './PaginationBlock.css';

function PaginationBlock() {
    return (
        <div className="pagination-container">
            <button type="button">Назад</button>
			<button type="button">Вперед</button>
			<div className="page">1 of 1455</div>
        </div>
    );
}

export { PaginationBlock };
