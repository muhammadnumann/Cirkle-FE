import React, { useState } from 'react';
import SelectedTick from './icons/selectedtick';
import LanguageIcon from './icons/languageicon';

const LanguageBtn = () => {
  const [isSelected, setisSelected] = useState(false);
  return (
    <>
      <div>
        <span
          className="mx-3"
          onClick={() => {
            setisSelected(!isSelected);
          }}
          id="dropdownLanguagebtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <LanguageIcon />
        </span>
        <ul
          className="language-list pb-2 text-center dropdown-menu"
          aria-labelledby="dropdownLanguagebtn"
        >
          <LanguageList />
          <LanguageList />
          <LanguageList />
          <LanguageList />
          <LanguageList />
          <LanguageList />
          <LanguageList />
          <LanguageList />
        </ul>
      </div>
    </>
  );
};
export default LanguageBtn;

const LanguageList = () => {
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
        <span className="pe-4 ps-3">
          <span className="px-2">
            <LanguageIcon />
          </span>{' '}
          App Name
        </span>
        {isSelected ? <SelectedTick /> : ''}
      </li>
    </>
  );
};
