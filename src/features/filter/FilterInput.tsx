import FilterStatusInput from './FilterStatusInput';
import FilterSearchInput from './FilterSearchInput';

const FilterInput = () => {
  return (
    <div className="d-flex align-items-center mb-3">
      <FilterSearchInput />
      <FilterStatusInput />
    </div>
  );
};

export default FilterInput;
