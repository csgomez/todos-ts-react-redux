import { useSelector } from 'react-redux';
import {
  _selectStatusFilter,
  selectSearchFilter,
  setSearchFilter,
  setStatusFilter,
} from './filterSlice';
import { useAppDispatch } from '../../app/hooks';
import React from 'react';
import { FilterStatusState } from './Filter';

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
      <FilterStatusInput />
    </div>
  );
};

const FilterStatusInput = () => {
  const dispatch = useAppDispatch();
  const statusFilter = useSelector(_selectStatusFilter);

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

export default FilterInput;
