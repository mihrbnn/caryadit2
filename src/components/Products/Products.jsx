import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { useDebouncedCallback  } from 'use-debounce';
//api
import baseURL from "../../api";
//components
import ProductCard from "./ProductCard";
import SearchBar from "../Search/SearchBar";



function Products() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');



  console.log("search", search)
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setValue(value);
    },
    // delay in ms
    8000
  );

  return <>
    <div className="container">
      <SearchBar
        value={search}
        onChangeText={e => debounced(e.target.value)}
      />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
      <p>Actual value: {search}</p>
      <p>Debounce value: {value}</p>
        {data
          .filter((item) => item.name.toLowerCase().includes(search))
          .map((item, index) =>
            (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)

          )}
      </div>
    </div>
  </>

}
export default Products;

