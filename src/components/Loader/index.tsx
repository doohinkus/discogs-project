import React from "react";
import styles from "./Loader.module.css";
import loader from "../../assets/discog-loader.svg";
export default function Loader({ ...props }) {
  return (
    <div data-testid="loader" className={styles.container}>
      {/* /Users/valenlongfeather/Documents/discogs-frontend-rp/src/assets/discog-loader.svg */}
      <img className={styles.loader} src={loader} />
      <p>Loading...</p>
    </div>
  );
}
