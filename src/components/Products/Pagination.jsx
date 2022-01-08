import ReactPaginate from "react-paginate";

function Pagination({ beersPerPage, data, setPageNumber }) {
  const pageCount = data.length / beersPerPage;
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
