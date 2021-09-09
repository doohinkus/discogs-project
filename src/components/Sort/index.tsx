import React from "react";
import "./Sort.css";

export default function Sort({ ...props }) {
  function handleSelect(e: any) {
    // console.log(e.target.value);
    if (e.target.value === "title") {
      props.handleSortByTitle();
    } else {
      props.handleSortByYear();
    }
  }
  return (
    <nav id="sortOptions" className="sort" aria-label="sorters">
      <div id="sort">Sort by: </div>
      <select
        aria-labelledby="sort"
        name="filterSelection"
        defaultValue="title"
        onChange={handleSelect}
      >
        <option>title</option>
        <option>year</option>
      </select>
    </nav>
  );
}
