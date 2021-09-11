import React from "react";
import styles from "./Header.module.css";
export default function Header({ ...props }) {
  return (
    <header>
      <h1 className={styles.header}>Discogs Release Explorer</h1>
    </header>
  );
}
