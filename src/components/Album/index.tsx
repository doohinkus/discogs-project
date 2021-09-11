import styles from "./Album.module.css";
type AlbumProps = {
  title: String;
  artist: String;
  year: Number;
  catno: String;
  thumb: any;
  id: string;
};
export default function Album({
  title,
  artist,
  year,
  catno,
  thumb,
  id,
}: AlbumProps) {
  return (
    <article>
      <section className={styles.album}>
        <div className={styles.image}>
          <a
            href={`https://www.discogs.com/release/${id}`}
            aria-label={`Disover more about ${title} with ${id}`}
          >
            <img
              src={thumb?.length > 0 ? thumb : "https://fakeimg.pl/150x150/"}
              className={styles.thumb}
              alt={`Album cover for ${title}`}
            />
          </a>
          <div className={styles.overlay}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.artist}>{artist}</p>
            <p className={styles.year}>{year}</p>
            <p className={styles.catno}>{catno}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
