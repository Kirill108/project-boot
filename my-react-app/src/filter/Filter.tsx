import { SortingBlock } from './FilterBlock/SortingBlock';
import { PaginationBlock } from '../PaginationBlock/PaginationBlock';
import './Filter.css';

function Filter() {
    return (
        <div className="filter-wrapper">
            <SortingBlock />
            <PaginationBlock />
        </div>
    );
}

export { Filter };
