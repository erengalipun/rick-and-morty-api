import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import FilterDropdown from "../components/filter-menu/FilterDropdown.jsx";
import Pagination from "../components/Pagination.jsx";
import List from "../components/List.jsx";
import PageUp from "../components/PageUp.jsx";
import { fetchLoc } from "../api.js";
import "../assets/styles/ListPages.scss";

function LocPage() {
  const [loc, setLoc] = useState([]);
  const [filteredLoc, setFilteredLoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const filters = Object.fromEntries(searchParams.entries());
        const data = await fetchLoc(currentPage + 1, filters);
        setLoc(data.results);
        setFilteredLoc(data.results);
        setPageInfo(data.info);
      } catch (error) {
        setError(true);
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, searchParams]);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const updateFilters = (filters) => {
    setSearchParams(filters);
  };

  if (loading) {
    return (
      <div className="list-pages">
        <Header />
        <FilterDropdown updateFilters={updateFilters} />
        <span className="title">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-pages">
        <Header />
        <FilterDropdown updateFilters={updateFilters} />
        <span className="title">No results found.</span>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <FilterDropdown updateFilters={updateFilters} />
      <div className="list-pages">
        <span className="title">Locations</span>
        {filteredLoc.map((loc) => (
          <List data={filteredLoc} fields={["name", "type", "dimension"]} />
        ))}
        <Pagination
          handlePageChange={handlePageChange}
          pageInfo={pageInfo}
          currentPage={currentPage}
        />
      </div>
      <PageUp />
    </div>
  );
}

export default LocPage;
