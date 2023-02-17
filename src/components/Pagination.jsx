import { getPagesArray, getPagesFor } from "../utils/pages";
import styles from "../styles/Pagination.module.css";
import PaginationBtn from "./PaginationBtn";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pagesArray = getPagesFor(currentPage, totalPages, 5);
  return (
    <div className={styles.pagination_block}>
      {currentPage != 0 && (
        <PaginationBtn pageNumber={"First"} onClick={() => setPage(0)} />
      )}
      {pagesArray.map((p) => {
        return (
          <PaginationBtn
            active={currentPage + 1}
            pageNumber={p + 1}
            onClick={() => setPage(p)}
          />
        );
      })}
      {currentPage != totalPages - 1 && (
        <PaginationBtn
          pageNumber={"Next"}
          onClick={() => setPage(currentPage + 1)}
        />
      )}
    </div>
  );
};

export default Pagination;
