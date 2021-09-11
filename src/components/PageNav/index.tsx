import Sort from "../Sort";
import styles from "./PageNav.module.css";

export default function PageNav({ ...props }) {
  return (
    <nav className={styles.pagination}>
      {/* Add a11y, swtich case for enter, left arrow, space bar */}
      <button
        className={styles.button}
        onClick={props.handlePrevPage}
        onKeyDown={props.handlePrevPage}
      >
        prev
      </button>
      <Sort
        handleSortByTitle={props.handleSortByTitle}
        handleSortByYear={props.handleSortByYear}
      />
      {/* Add a11y, swtich case for enter, right arrow, space bar, resuse function */}
      <button
        className={styles.button}
        onClick={props.handleNextPage}
        onKeyDown={props.handleNextPage}
      >
        next
      </button>
    </nav>
  );
}
