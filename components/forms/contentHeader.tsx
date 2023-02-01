import React from 'react';

const ContentHeader = (props) => {
  const isBtnSelected = props.isSelected;
  const setIsBtnSelected = props.setIsSelected;
  const HeadingLabel = props.headeing;

  return (
    <>
      <div className={`row w-100 mx-0 mt-3`}>
        <div className={` col-sm-5 px-0`}>
          <h3 className={`globle-heading-h3`}>{HeadingLabel}</h3>
        </div>
        <div className="col-sm-7 px-0">
          <div className="d-flex justify-content-end align-items-center">
            <div className={isBtnSelected ? 'd-flex' : 'd-none'}>
              <button
                className={`globle-pink-btn border-r-6 me-sm-2`}
                onClick={() => setIsBtnSelected(false)}
              >
                <span className="text-gradient">Cancel</span>
              </button>
              <button
                className="globle-gradient-btn border-r-6"
                onClick={() => setIsBtnSelected(false)}
              >
                Save
              </button>
            </div>
            <button
              className={isBtnSelected ? 'd-none' : 'globle-gradient-btn border-r-6'}
              onClick={() => setIsBtnSelected(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className={`row w-100  mx-0 mt-3`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
    </>
  );
};
export default ContentHeader;
