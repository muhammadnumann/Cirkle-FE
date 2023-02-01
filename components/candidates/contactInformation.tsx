import CandidateContactInformarionForm from 'components/forms/candidate/contactInformation';
import AddModal from 'components/forms/jobs/addModal';
import React, { useState } from 'react';

const InputData = [
  {
    label: 'Primary Email',
    type: 'email',
    info: 'Human Resources',
    placeholder: 'Enter here',
    options: ['a', 'a'],
  },
  {
    label: 'Primary Phone',
    type: 'phonenumber',
    info: 'Human Resources',
    placeholder: 'Enter here',
    options: ['a', 'a'],
    bgClass: 'phonecontainermodal',
  },
  {
    label: 'LinkedIn',
    type: 'text',
    info: 'Linked in',
    color: '#0E76A8',
    icon: 'fa fa-linkedin-square fa-lg',
    placeholder: 'Enter Link',
    options: ['a', 'a'],
    bgClass: 'social-bg-white',
  },
  {
    label: 'Current Address',
    type: 'email',
    info: 'Human Resources',
    placeholder: 'Enter here',
    options: ['a', 'a'],
  },

  {
    label: 'Personal Address',
    type: 'text',
    options: [''],
    info: '-',
    placeholder: 'Enter Here',
  },
];
function CandidateContactInformation() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className={`row w-100 mx-0 mt-3`}>
        <div className={` col-sm-5 px-0`}>
          <h3 className={`globle-heading-h3`}>Contact Information</h3>
        </div>
        <div className="col-sm-7 px-0">
          <div className="d-flex justify-content-end align-items-center">
            <button
              className={'globle-gradient-btn border-r-6'}
              onClick={() => setIsSelected(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className={`row w-100  mx-0 mt-3`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
      <CandidateContactInformarionForm isSelected={false} />
      {isSelected ? (
        // <AddJob setIsSelected={setIsSelected} isSelected={true} />
        <AddModal
          setIsSelected={setIsSelected}
          isSelected={true}
          title="Add Job"
          inputData={InputData}
        ></AddModal>
      ) : (
        ''
      )}
    </>
  );
}

export default CandidateContactInformation;
