//context
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";
//debounce perform
import debounce from "lodash.debounce";
import ResetButton from "../Reset/ResetButton";

function SearchBar() {
  const { setSearch, search } = useContext(MainContext);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);
  console.log("query", updateQuery);
  console.log("search", search);

  return (
    <>
      <div
        className="search-container my-5 d-flex justify-content-between"
        id="search"
      >
        <input
          d-flex
          className="input"
          type="text"
          onChange={debouncedOnChange}
          placeholder={" Search beer by name"}
        />
        <ResetButton d-flex className="ms-5"></ResetButton>
      </div>
      <div></div>
    </>
  );
}
export default SearchBar;
