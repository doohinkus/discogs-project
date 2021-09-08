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
        <div key={index}>
          {release.artist} : {release.year}
        </div>
      ))}
      {/* separate into na component */}
      {/* Add a11y, swtich case for enter, left arrow, space bar */}
      <button onClick={handlePrevPage} onKeyDown={handlePrevPage}>
        prev
      </button>
      {/* Add a11y, swtich case for enter, right arrow, space bar, resuse function */}
      <button onClick={handleNextPage} onKeyDown={handleNextPage}>
        next
      </button>
      {JSON.stringify(page)}
    </div>
  );
}
