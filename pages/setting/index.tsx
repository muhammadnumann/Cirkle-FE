import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

const Settings = () => {
  return (
    <>
      <div className={`main-heading-tab`}>
        <h3 className="deatailheading">Settings</h3>
      </div>
      <div className={`mt-3`} style={{ border: '0.2px solid #697A8D' }}></div>
    </>
  );
};
export default withPageAuthRequired(Settings);
