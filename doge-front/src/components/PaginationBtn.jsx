import styles from "../styles/Pagination.module.css";

const PaginationBtn = ({ onClick, pageNumber, active }) => {
  return (
    <div
      className={
        pageNumber !== active
          ? styles.page_btn
          : styles.page_btn_current + " " + styles.page_btn
      }
      key={pageNumber}
      onClick={pageNumber !== active && onClick}
    >
      {pageNumber}
    </div>
  );
};

export default PaginationBtn;
