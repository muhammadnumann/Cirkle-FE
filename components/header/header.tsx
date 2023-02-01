import React, { FC } from 'react';
import SearchIcon from 'components/icons/icon-search';
import styles from './header.module.css';
import profileAvtr from '/public/images/arash.png';
import Image from 'next/image';
import ModeButton from 'components/modebtn';
import Link from 'next/link';
import AppBtn from 'components/appsbtn';
import LanguageBtn from 'components/languagebtn';
import BellBtn from 'components/bellButton';

const Header: FC = () => {
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
        <div className="col-sm-3 col-4 text-end mt-2 px-0">
          <div className="d-flex align-items-center justify-content-end">
            <div>
              <LanguageBtn />
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <ModeButton />
              <AppBtn />
              <span className="me-4  position-relative">
                <BellBtn />
                <span className="notification-circle position-absolute top-0 end-0 rounded-circle text-white font-13 text-center bg-orange">
                  4
                </span>
              </span>
              <div className="d-inline-block">
                <div className={styles.dropdown}>
                  <div className="dropdown d-inline-block">
                    <button
                      className="btn btn-transparent no-sort-h p-0 position-relative circle-profile rounded-circle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image src={profileAvtr} alt="Picture of the author" />
                      <span className="online rounded-circle"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link href="/api/auth/logout">
                          <a className="dropdown-item">Log Out</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
