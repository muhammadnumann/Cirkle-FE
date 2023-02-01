import React from 'react';

const DropDownBadge = () => {
  return (
    <>
      <div
        className={` addBadge d-flex align-items-center px-2 bg-light-pink`}
        id="dropdownBadgeButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span
          className={`plus d-flex align-items-center justify-content-center gradient-bg text-white`}
        >
          +
        </span>
        <span className={`text-gradient font-12 font-weight-600  ps-1`}> 3 More</span>
      </div>
      <ul className="mode-list pb-2 dropdown-menu" aria-labelledby="dropdownBadgeButton">
        <li className="badge-item py-2 px-3">
          <span className="badge-pink-text">item 1</span>
        </li>
        <li className="badge-item py-2 px-3">
          <span className="badge-pink-text">item 2</span>
        </li>
        <li className="badge-item py-2 px-3">
          <span className="badge-pink-text">item 3</span>
        </li>
      </ul>
    </>
  );
};

export default DropDownBadge;
