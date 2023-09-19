import { useSelector } from 'react-redux';
import { selectSearchFilter, setSearchFilter } from './filterSlice';
import { useAppDispatch } from '../../app/hooks';

const FilterInput = () => {
  const searchFilter = useSelector(selectSearchFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex align-items-center">
      <label htmlFor="searchFilterInput" className="me-3">
        Search
      </label>
      <input
        id="searchFilterInput"
        type="text"
        value={searchFilter}
        onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        placeholder="study"
        className="form-control"
      />
    </div>
  );
};

export default FilterInput;
