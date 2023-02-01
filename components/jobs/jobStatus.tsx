import ContentHeader from 'components/forms/contentHeader';
import JobStatusForm from 'components/forms/jobs/jobStatusForm';
import React, { useState } from 'react';

const JobStatus = () => {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  return (
    <div>
      <ContentHeader
        isSelected={isBtnSelected}
        setIsSelected={setIsBtnSelected}
        headeing={'Job Status'}
      />
      <JobStatusForm isSelected={isBtnSelected} />
    </div>
  );
};

export default JobStatus;
