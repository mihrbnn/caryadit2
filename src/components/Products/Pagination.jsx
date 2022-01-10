//pagination
import ReactPaginate from "react-paginate";
//contexts
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";

function Pagination() {
  const { beersPerPage, data, setPageNumber } = useContext(MainContext);
  const pageCount = Math.floor(data.length / beersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"NextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive text-light"}
    />
  );
}
export default Pagination;
