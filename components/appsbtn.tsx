import React, { useState } from 'react';
import ShapeIcon from './icons/icon-shape';
import SelectedTick from './icons/selectedtick';

const AppBtn = () => {
  const [isSelected, setisSelected] = useState(false);
  return (
    <>
      <div>
        <span
          className="mx-3"
          onClick={() => {
            setisSelected(!isSelected);
          }}
          id="dropdownAppbtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <ShapeIcon isSelected={isSelected} />
        </span>
        <ul className="app-list pb-2  dropdown-menu" aria-labelledby="dropdownAppbtn">
          <p className="m-0 pt-2 pb-3 font-15 ps-2">Other Apps</p>
          <AppList />
          <AppList />
          <AppList />
          <AppList />
          <AppList />
          <p className="m-0 pt-2 pb-3 font-15 ps-2">Other Apps</p>
          <AppList />
          <AppList />
          <AppList />
        </ul>
      </div>
    </>
  );
};
export default AppBtn;

const AppList = () => {
  const [isSelected, setisSelected] = useState(false);
  return (
    <>
      <li
        className={`position-relative py-3 mt-1 w-100 ${
          isSelected ? 'bg-light-pink font-weight-500' : 'text-gray'
        }`}
        onClick={() => {
          setisSelected(!isSelected);
        }}
      >
        {isSelected ? <div className="selected"> </div> : ''}
        <span className="pe-5 ps-3">
          <span className="px-2">
            <ShapeIcon />
          </span>{' '}
          App Name
        </span>
        {isSelected ? <SelectedTick /> : ''}
      </li>
    </>
  );
};
