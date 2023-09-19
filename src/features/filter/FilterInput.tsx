import { useSelector } from 'react-redux';
import { selectSearchFilter, setSearchFilter } from './filterSlice';
import { useAppDispatch } from '../../app/hooks';

const FilterInput = () => {
  const searchFilter = useSelector(selectSearchFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex align-items-center mb-3">
      <input
        id="searchFilterInput"
        type="text"
        value={searchFilter}
        onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        className="form-control form-control-sm"
        placeholder="Search Todos"
      />
      {/* <label htmlFor="searchFilterInput" className="me-3">
        Search
      </label> */}
    </div>
  );
};

export default FilterInput;
