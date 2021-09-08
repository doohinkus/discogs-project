import React from "react";

export default function PageNav({ ...props }) {
  return (
    <nav>
      {/* Add a11y, swtich case for enter, left arrow, space bar */}
      <button onClick={props.handlePrevPage} onKeyDown={props.handlePrevPage}>
        prev
      </button>
      {/* Add a11y, swtich case for enter, right arrow, space bar, resuse function */}
      <button onClick={props.handleNextPage} onKeyDown={props.handleNextPage}>
        next
      </button>
    </nav>
  );
}
