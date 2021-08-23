import debounce from "../utils/debounce";

function SearchPanel({ searchValue, setSearchValue }) {

  function onChange(e) {
    return setSearchValue(e.target.value);
  }

  const onChangeDebounced = debounce(onChange, 200);

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="search"
        placeholder="type name to search..."
        onChange={onChangeDebounced}
      />
    </div>
  );
}

export default SearchPanel;
