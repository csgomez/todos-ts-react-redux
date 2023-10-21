import FilterStatusInput from './FilterStatusInput';
import FilterSearchInput from './FilterSearchInput';

const FilterInput = () => {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2 gap mb-3">
      <FilterSearchInput />
      <FilterStatusInput />
    </div>
  );
};

export default FilterInput;
