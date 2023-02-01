import ContentHeader from 'components/forms/contentHeader';
import JobDetailForm from 'components/forms/jobs/jobDetailForm';
import React, { useState } from 'react';

const JobDetail = () => {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  return (
    <div>
      <ContentHeader
        isSelected={isBtnSelected}
        setIsSelected={setIsBtnSelected}
        headeing={'Job Detail'}
      />
      <JobDetailForm isSelected={isBtnSelected} />
    </div>
  );
};

export default JobDetail;
