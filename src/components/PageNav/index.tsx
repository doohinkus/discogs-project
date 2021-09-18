import Sort from "../Sort";
import styles from "./PageNav.module.css";

export default function PageNav({ ...props }) {
  return (
    <nav className={styles.pagination}>
      <Sort
        handleSortByTitle={props.handleSortByTitle}
        handleSortByYear={props.handleSortByYear}
      />
    </nav>
  );
}
