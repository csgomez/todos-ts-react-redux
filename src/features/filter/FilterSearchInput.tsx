import { selectSearchFilter, setSearchFilter } from './filterSlice';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';

const FilterSearchInput = () => {
  const searchFilter = useSelector(selectSearchFilter);
  const dispatch = useAppDispatch();

  return (
    <input
      id="searchFilterInput"
      type="text"
      value={searchFilter}
      onChange={(e) => dispatch(setSearchFilter(e.target.value))}
      className="form-control form-control-sm"
      placeholder="Search Todos"
    />
  );
};

export default FilterSearchInput;
