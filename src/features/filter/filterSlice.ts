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

export const selectSearchFilter = (state: RootState) => state.filter.search;
export const _selectStatusFilter = (state: RootState) => state.filter.status;
export const selectStatusFilter = createSelector(
  (state: RootState) => state.filter,
  (filter) => {
    return filter.status;
  }
);
