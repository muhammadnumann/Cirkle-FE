import EmailPermissionIcon from 'components/icons/emailpermission';
import TickIcon from 'components/icons/tick';
import React from 'react';
import styles from './emailPermission.module.css';
import UnsubscribeModel from './unsubscribe-modal';

const EmailPermission = () => {
  // const isSelected = props.isSelected;

  return (
    <div className="w-100">
      <div className="container">
        <div className="row my-5 ">
          <div className="col-md-11 m-auto">
            <div className="row mx-0 align-items-center justify-content-center">
              <div className="col-6">
                <EmailPermissionIcon />
              </div>
              <div className="col-6">
                <div className="text-center">
                  <h3 className={`${styles.emailheading}`}>How this works?</h3>
                  <p>
                    When untick, your Contacts will only be unsubscribed from bulk email templates
                    (7. Email Contacts (Inc. Bulk Emails) section). Tick the box if you want to
                    subscribe Contacts to bulk email templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 m-auto">
            <div className="row pt-3">
              <div className="col-12">
                <div
                  className={`${styles.subscribe} d-flex align-items-center justify-content-between`}
                >
                  <div className={`d-flex align-items-center`}>
                    <TickIcon />
                    <p className="ps-3 m-0">You have subscribed for email</p>
                  </div>
                  <button
                    className={`globle-pink-btn border-r-6 ms-2`}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                  >
                    <span className="text-gradient">Click here to unsubscribe</span>
                  </button>
                  <UnsubscribeModel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPermission;
