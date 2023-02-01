import ContentHeader from 'components/forms/contentHeader';
import ForcastingForm from 'components/forms/jobs/forcastingform';
import React, { useState } from 'react';

const Forcasting = () => {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  return (
    <div>
      <ContentHeader
        isSelected={isBtnSelected}
        setIsSelected={setIsBtnSelected}
        headeing={'Forcasting'}
      />
      <ForcastingForm isSelected={isBtnSelected} />
    </div>
  );
};

export default Forcasting;
