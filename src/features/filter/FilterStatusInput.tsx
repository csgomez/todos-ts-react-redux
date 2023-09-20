import { useSelector } from 'react-redux';
import { selectStatusFilter, setStatusFilter } from './filterSlice';
import { useAppDispatch } from '../../app/hooks';
import { FilterStatusState } from './Filter';

const FilterStatusInput = () => {
  const dispatch = useAppDispatch();
  const statusFilter = useSelector(selectStatusFilter);

  const handleStatusFilterChange = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const value = e.currentTarget.value as FilterStatusState;
    dispatch(setStatusFilter(value));
  };

  return (
    <div className="status-filter">
      <label>
        <small>All</small>
        <input
          type="radio"
          name="todoStatusFilter"
          value="all"
          checked={statusFilter === 'all'}
          onChange={handleStatusFilterChange}
        />
      </label>
      <label>
        <small>Completed</small>
        <input
          type="radio"
          name="todoStatusFilter"
          value="completed"
          checked={statusFilter === 'completed'}
          onChange={handleStatusFilterChange}
        />
      </label>
      <label>
        <small>Incomplete</small>
        <input
          type="radio"
          name="todoStatusFilter"
          value="incomplete"
          checked={statusFilter === 'incomplete'}
          onChange={handleStatusFilterChange}
        />
      </label>
    </div>
  );
};

export default FilterStatusInput;
