import { useEffect, useContext } from "react";
//api
import { baseURL } from "../../api";
//context
import { MainContext } from "../../contexts/MainContextProvider";
//components
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function Products() {
  const { setData, pagesVisited, beersPerPage, filteredItems } =
    useContext(MainContext);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
        {filteredItems
          .slice(pagesVisited, pagesVisited + beersPerPage)
          .map((item) => (
            <ProductCard
              name={item.name}
              key={item.id}
              img={item.image_url}
              date={item.first_brewed}
            />
          ))}
      </div>
      <Pagination />
    </>
  );
}
export default Products;
