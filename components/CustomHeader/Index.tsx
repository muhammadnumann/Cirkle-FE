import React, { FC } from 'react';
import SearchIcon from 'components/icons/icon-search';
import styles from './CustomHeader.module.css';
import Image from 'next/image';
import player from '/public/icons/player.svg';

const CustomHeader: FC = () => {
  return (
    <div className={`${styles.header} fluid-container my-4 ms-2`}>
      <div className={`row mx-0 px-2 rounded top-header-hh `}>
        <div className="col-sm-9 col-8 px-0">
          <div className={`${styles.searchbar}`} id="searchContainer">
            <div className={`ps-2`}>
              <div className={styles.searchicon}>
                <SearchIcon />
              </div>
              <input
                className={`${styles.search_input} d-inline-block form-control font-15 fw-400 border-0`}
                type="text"
                name=""
                placeholder="Search (Ctrl+/)"
              ></input>
              <i></i>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-4 mt-2 px-0">
          <div className="d-flex align-items-center justify-content-end pe-4">
            <div className="player">
              <Image src={player} alt="Picture of the player" />
            </div>
            <div className="player-text">
              <div className="font-weight-400 line-23 font-12 text-grey">Today</div>
              <div className="font-weight-600 line-23 font-20 ">00:00:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
