import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List.jsx";
import Pagination from "../components/Pagination.jsx";
import PageUp from "../components/PageUp.jsx";
import { fetchEpi } from "../api.js";
import "../assets/styles/ListPages.scss";

function EpiPage() {
  const [epi, setEpi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchEpi(currentPage + 1);
        setEpi(data.results);
        setPageInfo(data.info);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, setPageInfo]);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <div className="list-pages">
        <span className="title">Episodes</span>
        <List data={epi} fields={["name", "air_date", "episode"]} />
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
