import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
//api
import baseURL from "../../api";
//components
import ProductCard from "./ProductCard";
import SearchBar from "../Search/SearchBar";


function Products() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const getFilteredItems = (search, data) => {
    return data.filter((item) => item.name.toLowerCase().includes(search))
  };

  const filteredItems = getFilteredItems(search, data);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  return <>
    <div className="container">
      <SearchBar
        onChangeFunc={debouncedOnChange}
      />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 my-5">
        <h1>Search İtems: </h1>
        {search && filteredItems
          .map((item, index) =>
            (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)

          )}
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
        <h1>Products:</h1>
        {data
          .map((item, index) =>
            (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)

          )}
      </div>
    </div>
  </>

}
export default Products;

