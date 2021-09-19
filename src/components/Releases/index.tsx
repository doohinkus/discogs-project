import Album from "../Album";
import styles from "./Releases.module.css";
import Loader from "../Loader";

export default function Releases({ ...props }) {
  const releases = (
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

  switch (props.loadState) {
    case "loading":
      return <Loader />;
    case "loaded":
      return releases;
    default:
      return (
        <div>Oops something went wrong, please check console for details.</div>
      );
  }
}
