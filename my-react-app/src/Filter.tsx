import { FilterBlock } from './FilterBlock';
import { PaginationBlock } from './PaginationBlock';
import './css/Filter.css';

function Filter() {
    return (
        <div className='filter-wrapper'>
            <FilterBlock />
            <PaginationBlock />
        </div>
    );
}

export { Filter };
