import debounce from "../utils/debounce";

function SearchPanel({ setSearchValue }) {
	function onChange(e) {
		setSearchValue(e.target.value);
	}

	const onChangeDebounced = debounce(onChange, 250);

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
