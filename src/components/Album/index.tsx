import "./Album.css";
type AlbumProps = {
  title: String;
  artist: String;
  year: Number;
  catno: String;
  thumb: any;
};
export default function Album({
  title,
  artist,
  year,
  catno,
  thumb,
}: AlbumProps) {
  return (
    <article>
      <section className="album">
        <img src={thumb} alt={`Album cover for ${title}`} />
        <div className="album__info">
          <h2>{title}</h2>
          <p>{artist}</p>
          <p>{year}</p>
          <p>{catno}</p>
        </div>
        <a>link</a>
      </section>
    </article>
  );
}
