export type FilterStatusState = 'all' | 'completed' | 'incomplete';

export interface FilterState {
  search: string;
  status: FilterStatusState;
}
