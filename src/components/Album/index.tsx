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
    <article className="album">
      <img src={thumb} alt={`Album cover for ${title}`} />
      <section>
        <span>{title}</span>
        <span>{artist}</span>
        <span>{year}</span>
        <span>{catno}</span>
      </section>
    </article>
  );
}
