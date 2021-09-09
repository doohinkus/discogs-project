import "./Releases.css";
import Album from "../Album";

export default function Releases({ ...props }) {
  return (
    <main>
      {props?.paginatedArray?.map((release: any, index: number) => (
        <div key={index}>
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
