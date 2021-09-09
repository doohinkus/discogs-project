import "./Album.css";
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
      <section className="album">
        <a
          href={`https://www.discogs.com/release/${id}`}
          aria-label={`Disover more about ${title} with ${id}`}
        >
          <img
            src={thumb?.length > 0 ? thumb : "https://fakeimg.pl/150x150/"}
            alt={`Album cover for ${title}`}
          />
        </a>
        <div className="album__info">
          <h2>{title}</h2>
          <p>{artist}</p>
          <p>{year}</p>
          <p>{catno}</p>
        </div>
      </section>
    </article>
  );
}
