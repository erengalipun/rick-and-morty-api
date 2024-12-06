import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import FilterDropdown from "../components/filter-menu/FilterDropdown.jsx";
import List from "../components/List.jsx";
import Pagination from "../components/Pagination.jsx";
import PageUp from "../components/PageUp.jsx";
import { fetchEpi } from "../api.js";
import "../assets/styles/ListPages.scss";

function EpiPage() {
  const [epi, setEpi] = useState([]);
  const [filteredEpi, setFilteredEpi] = useState([]);
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
        const data = await fetchEpi(currentPage + 1, filters);
        setEpi(data.results);
        setFilteredEpi(data.results);
        setPageInfo(data.info);
      } catch (error) {
        setError(true);
        console.error("Error fetching episodes:", error);
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
        <span className="title">Episodes</span>
        {filteredEpi.map((epi) => (
          <List fields={["name", "air_date", "episode"]} data={filteredEpi} />
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

export default EpiPage;
