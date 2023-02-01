import JobFormPaginationBar from 'components/jobs/forcasting/pagination/jobFormPagination';
import React from 'react';
import FormInput from '../form';

const ForcastingForm = (props) => {
  // const isSelected = props.isSelected;

  const InputData = [
    {
      label: '% chance of placement',
      type: 'text',
      info: '100',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Forecast fee by',
      type: 'select',
      info: 'Manual, 100 USD',
      placeholder: 'Enter here',
      options: ['Select', 'a'],
      labelIconCheck: true,
    },
    {
      label: 'Projected placement date',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Days of placement',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Difficulty level',
      type: 'pagination',
      options: ['a'],
      info: 'MM/DD/YYYY',
      placeholder: '-',
    },
    {
      label: 'Reason for difficulty',
      type: 'textarea',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
  ];

  return (
    <>
      <form>
        <div className="container-fluid">
          <div className="row">
            {InputData.map((val, index) => {
              return (
                <>
                  {val.type != 'pagination' ? (
                    <div
                      key={index}
                      className={`${
                        val.type === 'textarea'
                          ? 'col-12 mt-3 ps-0'
                          : 'col-xl-4 col-md-6 col-12 mt-3 ps-0'
                      }`}
                    >
                      <FormInput
                        label={val.label}
                        type={val.type}
                        info={val.info}
                        isSelected={props.isSelected}
                        options={val.options}
                        placeholder={val.placeholder}
                        labelIconCheck={val.labelIconCheck}
                      />
                    </div>
                  ) : (
                    <div className="col-xl-8 col-12 mt-3 ps-0">
                      <JobFormPaginationBar
                        pageCount={10}
                        label={val.label}
                        type={val.type}
                        info={val.info}
                        isSelected={props.isSelected}
                        options={val.options}
                        placeholder={val.placeholder}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default ForcastingForm;
