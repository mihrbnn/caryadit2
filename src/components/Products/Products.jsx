import { useEffect, useState } from "react";
//api
import baseURL from "../../api";
//components
import ProductCard from "./ProductCard";
import SearchBar from "../Search/SearchBar";
import ReactPaginate from "react-paginate";

function Products() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const beersPerPage = 6;
  const pagesVisited = pageNumber * beersPerPage;
  // const displayBeers = data.slice(pagesVisited, pagesVisited + beersPerPage).map(item => (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  console.log(data.length / beersPerPage);

  const pageCount = data.length / beersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="container">
        <SearchBar data={data} />
        <hr />
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
          <h1>Products:</h1>
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
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"NextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
export default Products;
