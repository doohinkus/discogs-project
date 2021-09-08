import { usePagination } from "../../hooks";
import "./Releases.css";
// paginate
// start, next, end
// take array map the array
export default function Releases({ ...props }) {
  const { page, handleNextPage, handlePrevPage, paginatedArray } =
    usePagination(10, props?.data?.releases);
  return (
    <div>
      {paginatedArray?.map((release: any, index: number) => (
        // separate into album component
        <div key={index}>{release.artist}</div>
      ))}
      {/* Add a11y */}
      <button onClick={handlePrevPage}>prev</button>
      <button onClick={handleNextPage}>next</button>
      {JSON.stringify(page)}
    </div>
  );
}
