import ContentHeader from 'components/forms/contentHeader';
import GeneralInformationForm from 'components/forms/contacts/generalInformationForm';
import React, { useState } from 'react';

const GeneralInformation = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`container px-0`}>
      <ContentHeader
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        headeing={'General Information'}
      />
      <GeneralInformationForm isSelected={isSelected} />
    </div>
  );
};

export default GeneralInformation;
