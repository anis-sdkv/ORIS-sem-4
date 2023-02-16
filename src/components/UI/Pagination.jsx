import { getPagesArray } from "../../utils/pages";

const Pagination = ({ totalPages, setPage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div>
      {pagesArray.map((p) => {
        return (
          <button
            key={p}
            style={{ width: "40px", height: "20px" }}
            onClick={() => setPage(p)}
          >
            {p + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
