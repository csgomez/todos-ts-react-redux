import FilterStatusInput from './FilterStatusInput';
import FilterSearchInput from './FilterSearchInput';

const FilterInput = () => {
  return (
    <div className="d-sm-flex align-items-center gap-3 mb-3">
      <FilterSearchInput />
      <FilterStatusInput />
    </div>
  );
};

export default FilterInput;
