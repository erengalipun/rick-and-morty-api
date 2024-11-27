import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FilterDropdown from "./filter-menu/FilterDropdown";
import Card from "./Card";
import PageUp from "./PageUp";
import "../assets/styles/Dashboard.scss";

function Dashboard() {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  useEffect(() => {
    fetchChar(currentPageUrl);
  }, [currentPageUrl]);

  const fetchChar = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setChar(response.data.results);
      setPageInfo(response.data.info);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters", error);
      setLoading(false);
    }
  };

  const handlePageChange = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    const newUrl = `https://rickandmortyapi.com/api/character?page=${
      selectedPage + 1
    }`;
    setCurrentPageUrl(newUrl);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      <span className="title">Characters</span>
      <FilterDropdown />
      <div className="card-grid">
        {char.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
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
      <PageUp />
    </div>
  );
}

export default Dashboard;
