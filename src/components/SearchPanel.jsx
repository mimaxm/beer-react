import debounce from "../utils/debounce";

function SearchPanel({ setSearchValue, setTotalPage, getPageCount, filteredData }) {

  function onChange(e) {
    setSearchValue(e.target.value);
    // setTotalPage(getPageCount(filteredData.length));
    // console.log(filteredData.length)
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
