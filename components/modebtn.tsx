import React, { useCallback, useEffect, useState } from 'react';
import { setCookieValue } from 'utils/helpers';
import ModeIcon from './icons/Headericon/mode';
// import themeOptions from './theme-options';
import { useTheme } from 'next-themes';
import { getCookieValue } from '../utils/helpers';
import SelectedTick from './icons/selectedtick';

const ModeButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [modesSelected, setModesSelected] = useState(false);
  const { theme, setTheme } = useTheme();
  // const themeSelected = themeOptions[theme || themeOptions.light];

  const handleDarkMode = useCallback(
    (val) => {
      if (val !== theme) {
        console.log(val);
        setTheme(val);
        setCookieValue('g-theme', val, 2147483647, '/');
      }

      // setTimeout(() => {
      //   global.window.location.reload();
      //   return false;
      // }, 0);
    },
    [theme]
  );

  useEffect(() => {
    if (getCookieValue('g-theme')) {
      setTheme(getCookieValue('g-theme') || 'light');
      setModesSelected(getCookieValue('g-theme') == 'dark');
    }
  }, []);

  return (
    <>
      <span
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        id="dropdownModebtn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <ModeIcon isSelected={isSelected} />
      </span>
      <ul className="mode-list pb-2 text-center dropdown-menu" aria-labelledby="dropdownModebtn">
        <li
          className={`position-relative py-3 w-100 ${
            modesSelected ? 'text-gray' : 'bg-light-pink font-weight-500'
          }`}
          onClick={() => {
            handleDarkMode('light');
            setModesSelected(false);
            setIsSelected(!isSelected);
          }}
        >
          {modesSelected === false ? <div className="selected"> </div> : ''}
          <ModeIcon isSelected={true} />
          <span className="px-2">Light Mode</span>

          {modesSelected === false ? <SelectedTick /> : ''}
        </li>

        <li
          className={`position-relative py-3 w-100  ${
            modesSelected ? 'bg-dark text-white font-weight-500' : 'text-lightgray'
          }`}
          onClick={() => {
            handleDarkMode('dark');
            setModesSelected(true);
            setIsSelected(!isSelected);
          }}
        >
          {modesSelected === true ? <div className="selected"> </div> : ''}
          <ModeIcon isSelected={false} />
          <span className="px-2">Dark Mode</span>
          {modesSelected === true ? <SelectedTick /> : ''}
        </li>
      </ul>
    </>
  );
};
export default ModeButton;
