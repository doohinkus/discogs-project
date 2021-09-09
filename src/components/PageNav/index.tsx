import React from "react";
import Sort from "../Sort";
import "./PageNav.css";

export default function PageNav({ ...props }) {
  return (
    <nav className="pagination">
      {/* Add a11y, swtich case for enter, left arrow, space bar */}
      <button onClick={props.handlePrevPage} onKeyDown={props.handlePrevPage}>
        prev
      </button>
      <Sort
        handleSortByTitle={props.handleSortByTitle}
        handleSortByYear={props.handleSortByYear}
      />
      {/* Add a11y, swtich case for enter, right arrow, space bar, resuse function */}
      <button onClick={props.handleNextPage} onKeyDown={props.handleNextPage}>
        next
      </button>
    </nav>
  );
}
