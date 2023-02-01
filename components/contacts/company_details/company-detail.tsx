import React, { useState } from 'react';
import { CompanyDetailsInner } from 'components/forms/contacts/companydetails';
import { AddCampanyContact } from 'components/forms/contacts/addcomapnycontact';

const CompanyDetails = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {isSelected && <div className="overlay"></div>}
      <div className={`mx-0 mt-3`}>
        <div className={`d-flex align-items-center justify-content-between`}>
          <h3 className={`globle-heading-h3 mb-0`}>Company Contacts</h3>
          <div className="d-inline">
            <button className="globle-gradient-btn border-r-6" onClick={() => setIsSelected(true)}>
              Add Contact
            </button>
          </div>
        </div>
        <div className={`mt-3`} style={{ borderBottom: '0.2px solid #697A8D' }}></div>
        <CompanyDetailsInner />
      </div>
      {isSelected && (
        <AddCampanyContact
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          Name="Add Contact"
        />
      )}
    </>
  );
};

export default CompanyDetails;
