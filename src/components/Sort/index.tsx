import React from "react";

export default function Sort({ ...props }) {
  return (
    <nav id="sortOptions" aria-label="sorters">
      <div id="sort">Sort by:</div>
      <select aria-labelledby="sort">
        <option>title</option>
        <option>year</option>
      </select>
    </nav>
  );
}
