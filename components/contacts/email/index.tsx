import React from 'react';
import EmailPermission from 'components/models/emailPermision';

const EmailPermissionDetail = () => {
  return (
    <div className={`row mx-0`}>
      <div className={`d-flex align-items-center px-0 mt-3 mx-0`}>
        <h3 className="globle-heading-h3">Email Permission</h3>
      </div>
      <div className={`mt-3 me-2`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
      <EmailPermission />
    </div>
  );
};

export default EmailPermissionDetail;
