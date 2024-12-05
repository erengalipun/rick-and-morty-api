import React from "react";
import ReactPaginate from "react-paginate";
import "../assets/styles/Pagination.scss";

function Pagination({ handlePageChange, pageInfo, currentPage }) {
  return (
    <>
      <ReactPaginate
        pageCount={pageInfo.pages}
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel="< Previous"
        nextLabel="Next >"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={currentPage}
        disabledClassName="disabled"
      />
    </>
  );
}

export default Pagination;
