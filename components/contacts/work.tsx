import React, { useState } from 'react';
import WorkInformationform from 'components/forms/contacts/workInformationform';
import ContentHeader from 'components/forms/contentHeader';

const WorkInformation = () => {
  const [isSelected, setIsSelected] = useState(false);
  // const router = useRouter();
  // const contactid = router.query.id;

  return (
    <div className={`container px-0 mx-0`}>
      <ContentHeader
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        headeing={'Work Information'}
      />
      <WorkInformationform isSelected={isSelected} />
    </div>
  );
};

export default WorkInformation;
