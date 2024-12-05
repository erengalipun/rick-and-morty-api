import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination.jsx";
import List from "../components/List.jsx";
import PageUp from "../components/PageUp.jsx";
import { fetchLoc } from "../api.js";
import "../assets/styles/ListPages.scss";

function LocPage() {
  const [loc, setLoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchLoc(currentPage + 1);
        setLoc(data.results);
        setPageInfo(data.info);
      } catch (error) {
        console.error("Error fetching locations:", error);
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
        <span className="title">Locations</span>
        <List data={loc} fields={["name", "type", "dimension"]} />
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
