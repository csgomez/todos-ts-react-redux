import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { FilterState, FilterStatusState } from './Filter';
import { RootState } from '../../app/store';

const initialState: FilterState = {
  search: '',
  status: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<FilterStatusState>) => {
      state.status = action.payload;
    },
  },
});

export const { setSearchFilter, setStatusFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectSearchFilter = createSelector(
  (state: RootState) => state.filter.search,
  (searchFilter) => searchFilter
);

export const selectStatusFilter = createSelector(
  (state: RootState) => state.filter.status,
  (statusFilter) => statusFilter
);
