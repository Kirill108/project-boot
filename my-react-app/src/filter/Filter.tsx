import { SortingBlock } from './filter-block/sorting_block';
import { PaginationBlock } from '../pagination_block/pagination_block';
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
