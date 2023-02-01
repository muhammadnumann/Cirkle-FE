import CloseButton from 'components/icons/closebtn';
import EmailPermissionIcon from 'components/icons/emailpermission';
import React from 'react';
import styles from './emailPermission.module.css';

const UnsubscribeModel = () => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
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
            <EmailPermissionIcon />
          </div>
          <div className={`${styles.unsubscribeModalBody} text-center mx-5 py-5`}>
            <h5 className="globle-heading-h6">Unsubscribe</h5>
            <p>Do you really want to unsubscirbe the email?</p>
          </div>
          <div className="text-center py-4">
            <button type="button" className={`globle-pink-btn border-r-6`} data-bs-dismiss="modal">
              <span className="text-gradient">No, Cancel</span>
            </button>
            <button type="button" className={`globle-gradient-btn border-r-6 py-2 px-3 ms-2`}>
              Yes, Unsubscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribeModel;
