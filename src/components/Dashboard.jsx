import React from "react";
import FilterDropdown from "./filter-menu/FilterDropdown";
import Card from "./Card";
import PageUp from "./PageUp";
import "../assets/styles/Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <span className="title">Characters</span>
      <FilterDropdown />
      <div className="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="pagination"></div>
      <PageUp />
    </div>
  );
}

export default Dashboard;
