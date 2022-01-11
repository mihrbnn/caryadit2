import { useEffect, useContext } from "react";
//api
import { baseURL } from "../../api";
//context
import { MainContext } from "../../contexts/MainContextProvider";
//components
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function Products() {
  const {
    data,
    setData,
    pagesVisited,
    beersPerPage,
    search,
    phValue,
    srmValue,
  } = useContext(MainContext);

  useEffect(() => {
    console.log(phValue);
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(
          json.filter(
            (item) =>
              item.name.toLowerCase().includes(search) &&
              phValue[0] <= item.ph &&
              phValue[1] >= item.ph &&
              item.srm >= srmValue
          )
        );
      });
  }, [search, phValue, srmValue]);

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 my-5 ">
        {data?.slice(pagesVisited, pagesVisited + beersPerPage).map((item) => (
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
