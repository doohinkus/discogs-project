import "./Releases.css";
import Album from "../Album";
import "./Releases.css";

export default function Releases({ ...props }) {
  return (
    <main className="releases">
      {props?.paginatedArray?.map((release: any, index: number) => (
        <div key={index} className="release">
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
