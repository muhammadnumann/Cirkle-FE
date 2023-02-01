import ContentHeader from 'components/forms/contentHeader';
import JobCompanyInformationForm from 'components/forms/jobs/companyInformationForm';
import React, { useState } from 'react';

const CompanyInformation = () => {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  return (
    <div>
      <ContentHeader
        isSelected={isBtnSelected}
        setIsSelected={setIsBtnSelected}
        headeing={'Company Information'}
      />
      <JobCompanyInformationForm isSelected={isBtnSelected} />
    </div>
  );
};

export default CompanyInformation;
