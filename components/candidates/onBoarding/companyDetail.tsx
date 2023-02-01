import {
  CAccordian,
  AccordianItem,
  AccordianHeading,
  AccordianCollapse,
} from 'components/accordian';
import EducationRefrenceForm from 'components/forms/candidate/EduacationForm';
import React, { FC, useState } from 'react';

const CompanyDetail: FC = () => {
  // const [isSelected, setIsSelected] = useState([false, false])
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const data = [
    {
      name: 'Company 1',
      isSelected: isSelected,
      setIsSelected: setIsSelected,
    },
    {
      name: 'Company 2',
      isSelected: isSelected2,
      setIsSelected: setIsSelected2,
    },
  ];
  return (
    <div id="page">
      <div className="main-help-center-parent ps-2 py-4">
        <div className="help-center-main pt-3">
          <CAccordian>
            {data.map((val, ind) => {
              return (
                <AccordianItem key={ind} ClassName="bg-transparent accordian-border">
                  <AccordianHeading
                    isEditbtn={true}
                    btnClass="bg-transparent p-4"
                    ClassName="font-22 bg-transparent"
                    id="accordion-header"
                    target={`Educationcollapsed-${ind}`}
                    setFormIsSelected={val.setIsSelected}
                    isSelected={val.isSelected}
                  >
                    {val.name}
                  </AccordianHeading>
                  <AccordianCollapse
                    ClassName="accordian-collapse-border-top"
                    id={`Educationcollapsed-${ind}`}
                  >
                    <EducationRefrenceForm isSelected={val.isSelected} />
                  </AccordianCollapse>
                </AccordianItem>
              );
            })}
          </CAccordian>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
