//context
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";
import { BiSearchAlt } from "react-icons/bi";
//debounce perform
import debounce from "lodash.debounce";
import ResetButton from "../Reset/ResetButton";

function SearchBar() {
  const { setSearch, search } = useContext(MainContext);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  return (
    <>
      <div
        className="search-container my-5 d-flex justify-content-center"
        id="search"
      >
        <input
          d-flex
          className="input me-4"
          type="text"
          onChange={debouncedOnChange}
          placeholder={" Search beer by name"}
        />
        <ResetButton className="ms-5 d-flex ">Reset</ResetButton>
      </div>
    </>
  );
}
export default SearchBar;
