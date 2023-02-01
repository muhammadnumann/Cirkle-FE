import ContactInformationForm from 'components/forms/contacts/contactinformationform';
import ContentHeader from 'components/forms/contentHeader';
import React, { useState } from 'react';

const ContactInformation = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`mx-0`}>
      <ContentHeader
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        headeing={'Contact Information'}
      />
      <ContactInformationForm isSelected={isSelected} />
    </div>
  );
};

export default ContactInformation;
