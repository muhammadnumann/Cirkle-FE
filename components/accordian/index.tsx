import React, { Dispatch, SetStateAction, useState } from 'react';

interface CAccordian {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface AccordianItem {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface AccordianHeading {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
  target: string;
  btnClass?: string;
  isEditbtn?: boolean;
  isSelected?: boolean;
  setFormIsSelected?: Dispatch<SetStateAction<boolean>>;
}
interface AccordianCollapse {
  id: string;
  ClassName?: string;
  children: React.ReactNode;
}
export const CAccordian: React.FC<CAccordian> = ({ children, id, ClassName }) => {
  return (
    <>
      <div
        className={`${ClassName} font-poppin accordion accordion-main  bg-transparent border-0`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};
export const AccordianItem: React.FC<AccordianItem> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div className={`accordion-item bg-white mb-3  border-0 rounded-0 ${ClassName}`} id={id}>
          {children}
        </div>
      )}
    </>
  );
};
const toggleFormSelectedIfSet = (
  isSelected?: boolean,
  setFormIsSelected?: Dispatch<SetStateAction<boolean>>
) => {
  if (isSelected && setFormIsSelected) {
    setFormIsSelected(!isSelected);
  }
};

export const AccordianHeading: React.FC<AccordianHeading> = ({
  children,
  id,
  ClassName,
  target,
  btnClass,
  isEditbtn,
  isSelected,
  setFormIsSelected,
}) => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <>
      {isEditbtn ? (
        <div className="d-flex align-items-center justify-content-between w-100 position-relative accordion-header overflow-hidden">
          <div
            className={`w-100 arrow accordion-button rounded-0 text-black shadow-none cursor-pointer ${btnClass}`}
            onClick={() => {
              setIsCollapse(!isCollapse);
            }}
            data-bs-toggle="collapse"
            data-bs-target={`#${target}`}
            aria-expanded="true"
            aria-controls={target}
          >
            <span className="font-16 font-weight-400">{children}</span>
          </div>
          {isCollapse ? (
            isSelected ? (
              <div className="d-flex position-absolute btn-position">
                <a
                  className="index-5 text-white filterbtn"
                  onClick={() => {
                    toggleFormSelectedIfSet(isSelected, setFormIsSelected);
                  }}
                >
                  Cancel
                </a>
                <a
                  className="index-5 text-white globle-gradient-btn border-r-6 me-2"
                  onClick={() => {
                    toggleFormSelectedIfSet(isSelected, setFormIsSelected);
                  }}
                >
                  Save
                </a>
              </div>
            ) : (
              <a
                className="index-5 text-white globle-pink-btn border-r-6 me-2 position-absolute btn-position"
                onClick={() => {
                  toggleFormSelectedIfSet(isSelected, setFormIsSelected);
                }}
              >
                <span className="text-gradient">Edit</span>
              </a>
            )
          ) : (
            ''
          )}
        </div>
      ) : (
        <h2 className={`accordion-header ${ClassName}`} id={id}>
          <button
            className={`arrow accordion-button rounded-0 bg-white text-black shadow-none ${btnClass}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${target}`}
            aria-expanded="true"
            aria-controls={target}
          >
            {children}
          </button>
        </h2>
      )}
    </>
  );
};
export const AccordianCollapse: React.FC<AccordianCollapse> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div
          id={id}
          className={`${ClassName} accordion-collapse collapse  px-3 position-relative`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      )}
    </>
  );
};
