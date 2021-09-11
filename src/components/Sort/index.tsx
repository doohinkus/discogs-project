import React from "react";
import styles from "./Sort.module.css";

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
    <nav id="sortOptions" className={styles.sort} aria-label="sorters">
      <div id="sort">Sort by: </div>
      <select
        aria-labelledby="sort"
        name="filterSelection"
        defaultValue="title"
        className={styles.select}
        onChange={handleSelect}
        data-testid="sort"
      >
        <option data-testid="title">title</option>
        <option data-testid="year">year</option>
      </select>
    </nav>
  );
}
