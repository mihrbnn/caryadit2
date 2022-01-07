import { useEffect, useState } from "react";
//api
import baseURL from "../../api";
//components
import ProductCard from "./ProductCard";
import SearchBar from "../Search/SearchBar";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";

function Products() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const beersPerPage = 6;
  const pagesVisited = pageNumber * beersPerPage;

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <div className="container">
        <SearchBar data={data} />
        <hr />
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
          {data
            .slice(pagesVisited, pagesVisited + beersPerPage)
            .map((item, index) => (
              <ProductCard
                name={item.name}
                key={item.id}
                img={item.image_url}
                date={item.first_brewed}
              />
            ))}
        </div>
        <Pagination
          beersPerPage={beersPerPage}
          data={data}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}
export default Products;
