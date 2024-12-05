import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterDropdown from "./filter-menu/FilterDropdown";
import Card from "./Card";
import PageUp from "./PageUp";
import Pagination from "./Pagination.jsx";
import { fetchChar } from "../api.js";
import "../assets/styles/Dashboard.scss";

function Dashboard() {
  const [char, setChar] = useState([]);
  const [filteredChar, setFilteredChar] = useState([]);
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
        const data = await fetchChar(currentPage + 1, filters);
        setChar(data.results);
        setFilteredChar(data.results);
        setPageInfo(data.info);
      } catch (error) {
        setError(true);
        console.error("Error fetching characters:", error);
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
    return <span className="info">Loading...</span>;
  }

  if (error) {
    return <span className="info">No results found.</span>;
  }

  return (
    <div className="dashboard">
      <span className="title">Characters</span>
      <FilterDropdown updateFilters={updateFilters} />
      <div className="card-grid">
        {filteredChar.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        pageInfo={pageInfo}
        currentPage={currentPage}
      />
      <PageUp />
    </div>
  );
}

export default Dashboard;
