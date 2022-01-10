//context
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";
//debounce perform
import debounce from "lodash.debounce";

function SearchBar() {
  const { setSearch } = useContext(MainContext);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  return (
    <>
      <div
        className="search-container my-5 d-flex justify-content-center"
        id="search"
      >
        <input
          className="input"
          type="text"
          onChange={debouncedOnChange}
          placeholder={" Search beer by name"}
        />
      </div>
    </>
  );
}
export default SearchBar;
