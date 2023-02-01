import PaginationLeftIcon from 'components/icons/pagination/left';
import PaginationRightIcon from 'components/icons/pagination/right';
import { Dispatch, FC, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  pageCount: number;
  onPageChange: Dispatch<SetStateAction<number>>;
};
const PaginationBar: FC<Props> = ({ pageCount, currentPage, onPageChange }: Props) => {
  const decrementEnabled = currentPage != 1;
  const incrementEnabled = currentPage < pageCount;

  return (
    <ReactPaginate
      previousLabel={<PaginationLeftIcon enabled={decrementEnabled} />}
      nextLabel={<PaginationRightIcon enabled={incrementEnabled} />}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      breakLabel="..."
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      activeClassName={styles.selected}
      className={styles.paginationBar}
      pageClassName={styles.pageButton}
      breakClassName={styles.more}
      previousLinkClassName={styles.pageNavButton}
      nextLinkClassName={styles.pageNavButton}
      forcePage={currentPage - 1}
      onClick={({ selected }) => onPageChange(selected + 1)}
    />
  );
};

export default PaginationBar;
