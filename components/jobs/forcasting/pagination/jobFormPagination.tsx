import ReactPaginate from 'react-paginate';
import styles from './jobFormPagination.module.css';
import EasyEdit from 'react-easy-edit';

const JobFormPaginationBar = (props) => {
  return (
    <>
      <label className={styles.informationlabel}>{props.label}</label>
      <br />
      <EasyEdit
        type="text"
        editMode={props.isSelected}
        hideCancelButton
        hideSaveButton
        value={props.info}
        cancelOnBlur
        onSave={() => {
          console.log('saved!');
        }}
        saveOnBlur
        name="custom-Date"
        editComponent={
          <ReactPaginate
            previousClassName={'d-none'}
            nextClassName={'d-none'}
            marginPagesDisplayed={10}
            pageCount={props.pageCount}
            activeClassName={styles.selected}
            className={styles.paginationBar}
            pageClassName={`${styles.pageButton}`}
          />
        }
        placeholder={props.placeholder}
      />
    </>
  );
};

export default JobFormPaginationBar;
