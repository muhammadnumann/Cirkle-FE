import CloseButton from 'components/icons/closebtn';
import WorkSheet from 'components/icons/workSheet';
import React from 'react';
import styles from './emailPermission.module.css';

const WorkSheetModel = () => {
  return (
    <div className={`${styles.unsubscribeModal}`}>
      <div className={`bg-light-pink text-center position-relative pt-5 px-5`}>
        <button
          className={styles.cancelbtn}
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <CloseButton />
        </button>
        <WorkSheet />
      </div>
      <div className={`${styles.unsubscribeModalBody} text-center mx-5 py-5`}>
        <h5 className="globle-heading-h6">How this works?</h5>
        <p>
          Enabling Self-Bill allows recruiters to generate Self-Bill Invoices on behalf of the
          Candidate Company. If Self-Bill is enabled, Self-Bill Invoices will replace Purchase
          Invoices where:
        </p>
        <p>1. Job type is not Permanent</p>
        <p>2. Pay type is either Ltd Co.or Corporation OR Umbrella Company</p>
        <p>3. Self - Bill is ENABLED for the placement job type.</p>
      </div>
    </div>
  );
};

export default WorkSheetModel;
