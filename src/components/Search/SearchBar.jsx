import { useState } from 'react';
import debounce from 'lodash.debounce';

// import {AiOutlineSearch} from 'react-icons/ai';
//components
import ProductCard from '../Products/ProductCard'

function SearchBar({ data }) {
  const [search, setSearch] = useState('');


  const getFilteredItems = (search, data) => {
    return data.filter((item) => item.name.toLowerCase().includes(search))
  };

  const filteredItems = getFilteredItems(search, data);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  return (
    <>
      <div className="search-container my-4">
        {/* <AiOutlineSearch /> */}
        <input
          className='sbx-custom__input'
          type="text"
          onChange={debouncedOnChange}
          placeholder={" Search beer by name"}
        />
      </div>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 my-5">
        <h1>Search İtems: </h1>
        {search && filteredItems
          .map((item, index) =>
            (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)

          )}
      </div>
    </>
  );
}
export default SearchBar;
