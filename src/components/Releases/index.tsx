import Album from "../Album";
import styles from "./Releases.module.css";

export default function Releases({ ...props }) {
  return (
    <main className={styles.releases}>
      {props?.paginatedArray?.map((release: any, index: number) => (
        <div key={index} className={styles.release}>
          <Album
            artist={release.artist}
            year={release.year}
            catno={release.catno}
            title={release.title}
            thumb={release.thumb}
            id={release.id}
          />
        </div>
      ))}
    </main>
  );
}
