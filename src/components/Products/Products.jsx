import { useEffect, useState } from "react";
//api
import baseURL from "../../api";
//components
import ProductCard from "./ProductCard";
import SearchBar from "../Search/SearchBar";


function Products() {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);



  return <>
    <div className="container">
      <SearchBar
        data={data}
      />
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

