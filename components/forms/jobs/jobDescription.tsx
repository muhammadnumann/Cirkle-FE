/* eslint-disable @typescript-eslint/no-explicit-any */
import FullScreenIocn from 'components/icons/fullScreen';
import ArrowLeft from 'components/icons/textAreaIcons/arrowLeft';
import ArrowRight from 'components/icons/textAreaIcons/arrowRight';
import TextLining from 'components/icons/textAreaIcons/textlining';
import React, { useState } from 'react';
import BoldIcon from 'components/icons/textAreaIcons/boldIcon';
import ItalicIcon from 'components/icons/textAreaIcons/ItalicIcon';
import UnderlineIcon from 'components/icons/textAreaIcons/underlineIcon';
import DollarIcon from 'components/icons/textAreaIcons/dollarIcon';
import LessgreaterIcon from 'components/icons/textAreaIcons/lessgreaterIcon';
import EraseIcon from 'components/icons/textAreaIcons/eraseIcon';
import BulletsIcon from 'components/icons/textAreaIcons/bulletsIcon';
import NumberBulletIcon from 'components/icons/textAreaIcons/numberBulletIcon';
import LinkIcon from 'components/icons/textAreaIcons/linkIcon';
import ImageIcon from 'components/icons/textAreaIcons/ImageIcon';
import { QuotesIcon } from 'components/icons/textAreaIcons/quotesIcon';
import LessSlashIcon from 'components/icons/textAreaIcons/lessSlashIcon';
import MinusIcon from 'components/icons/textAreaIcons/minusIcon';

const JobDescription = (props: any) => {
  const { setviewDescription, heading, addorsave, isFullScreen, jobDescriptionText } = props;
  const [isBold, setisBold] = useState(false);
  const [isItalic, setisItalic] = useState(false);
  const [isUnderline, setisUnderline] = useState(false);
  const [textArea, settextArea] = useState(jobDescriptionText);
  const [isLineThrough, setisLineThrough] = useState(false);
  const [isRed, setisRed] = useState(false);
  const [isBlue, setisBlue] = useState(false);
  const [isGreen, setisGreen] = useState(false);
  const [FullScreen, setFullScreen] = useState(false);
  const [jobsection, setjobsection] = useState(false);
  const [viewDiscriptionText, setviewDiscriptionText] = useState(jobDescriptionText);

  const setColorBlue = () => {
    console.log('blue');
    setisRed(false);
    setisGreen(false);
    setisBlue(true);
  };
  const setColorRed = () => {
    console.log('Red ');

    setisRed(true);
    setisGreen(false);
    setisBlue(false);
  };
  const setColorGreen = () => {
    console.log('Green ');

    setisRed(false);
    setisGreen(true);
    setisBlue(false);
  };

  const AddQuotation = () => {
    settextArea(textArea + '"');
  };
  const AddHyphen = () => {
    settextArea(textArea + '-');
  };
  const SaveInfo = () => {
    setjobsection(!jobsection);
    setviewDiscriptionText(textArea);
  };

  return (
    <>
      <div className={`sidebar-bottom-side ${FullScreen ? 'full-screen-view' : ''}`}>
        <div className="sidebar-bottom-main row bg-light-pink w-100 m-auto">
          <div className="col-6">
            <div className="cr-p px-3 py-4 d-flex align-items-center">
              <span className="arrowLeft" onClick={() => setviewDescription(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#6E0674', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#4660AF', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad1)"
                    d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
                  />
                </svg>
              </span>
              <span className="ms-3 globle-heading-h4">{heading}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center justify-content-end h-100 contact-add-cancel">
              {jobsection ? (
                <button
                  className="btn btn-white py-2"
                  onClick={() => {
                    setjobsection(!jobsection);
                  }}
                >
                  <span>Cancel</span>
                </button>
              ) : (
                ''
              )}
              <button
                className=" globle-gradient-btn border-r-6 py-2 "
                onClick={() => {
                  SaveInfo();
                }}
              >
                {' '}
                {jobsection ? 'Save' : `${addorsave}`}{' '}
              </button>
              {isFullScreen ? (
                <div
                  className="mx-4 cursor-pointer "
                  onClick={() => {
                    setFullScreen(!FullScreen);
                  }}
                >
                  <FullScreenIocn />{' '}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="add-modal-body ps-3">
          {!jobsection ? (
            <>
              <h1 className="font-48 heading p-0 font-weight-600">Job Title</h1>
              <p className="font-16 text-black font-weight-500 font-style-italic">MM/DD/YYYY</p>
              <div className="font-20 text-black font-weight-400">{viewDiscriptionText}</div>
            </>
          ) : (
            ''
          )}

          {jobsection ? (
            <div className="description-box ">
              <p className="informationlabel mb-1">Job description</p>
              <div className=" description-box-main-514">
                <div className="add-description-header d-flex align-items-center justify-content-left px-3">
                  <div>
                    <span className="pe-3">
                      <ArrowLeft />
                    </span>
                    <ArrowRight />
                  </div>
                  <select
                    id="inputState"
                    className="ms-3 select-text-style form-control font-14 font-weight-400 p-0 px-1 border-0 "
                  >
                    <option selected>Normal text</option>
                    <option>Unread</option>
                    <option>Unseen</option>
                  </select>
                  <ArrangeTextLining />
                  <span>
                    <SelectColor
                      setColorRed={setColorRed}
                      setColorBlue={setColorBlue}
                      setColorGreen={setColorGreen}
                    />
                  </span>

                  <span
                    className={` ${isBold ? 'bg-white ' : ''} cr-p px-2`}
                    onClick={() => {
                      setisBold(!isBold);
                    }}
                  >
                    <BoldIcon />
                  </span>
                  <span
                    className={`${isItalic ? 'bg-white ' : ''} cr-p px-2`}
                    onClick={() => {
                      setisItalic(!isItalic);
                    }}
                  >
                    <ItalicIcon />
                  </span>
                  <span
                    className={`${isUnderline ? 'bg-white ' : ''} cr-p px-2`}
                    onClick={() => {
                      setisUnderline(!isUnderline);
                    }}
                  >
                    <UnderlineIcon />
                  </span>
                  <span
                    className={`${isLineThrough ? 'bg-white ' : ''} cr-p px-2`}
                    onClick={() => {
                      setisLineThrough(!isLineThrough);
                    }}
                  >
                    <DollarIcon />
                  </span>
                  <span className={`cr-p px-2`}>
                    <LessgreaterIcon />
                  </span>
                  <span
                    className={`cr-p px-2`}
                    onClick={() => {
                      settextArea('');
                    }}
                  >
                    <EraseIcon />
                  </span>
                  <span className="cr-p px-2">
                    <BulletsIcon />
                  </span>
                  <span className="cr-p px-2">
                    <NumberBulletIcon />
                  </span>
                  <label>
                    <span className="cr-p px-2">
                      <LinkIcon />
                    </span>
                    <input type="file" className="d-none"></input>
                  </label>
                  <label>
                    <span className="cr-p px-2">
                      <ImageIcon />
                    </span>
                    <input type="file" accept="image/png, image/jpeg" className="d-none"></input>
                  </label>

                  <span className="cr-p pe-1 ps-3">
                    <LessSlashIcon />
                  </span>
                  <span
                    className="cr-p pe-1 ps-3"
                    onClick={() => {
                      AddQuotation();
                    }}
                  >
                    <QuotesIcon />
                  </span>
                  <span
                    className="cr-p pe-1 ps-3"
                    onClick={() => {
                      AddHyphen();
                    }}
                  >
                    <MinusIcon />
                  </span>
                </div>
                <textarea
                  onChange={(e) => {
                    settextArea(e.target.value);
                  }}
                  value={textArea}
                  className={`description-box-textarea h-100 w-100 ${
                    isBold ? 'font-weight-700' : ''
                  }
                 ${isUnderline ? 'text-underline' : ''} ${isItalic ? 'font-style-italic' : ''} ${
                    isLineThrough ? 'text-linethrough ' : ''
                  }
                 ${isRed ? 'font-red' : ''} ${isBlue ? 'font-blue' : ''} ${
                    isGreen ? 'font-green' : ''
                  }`}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
export default JobDescription;

const ArrangeTextLining = () => {
  const [isSelected, setisSelected] = useState(false);
  return (
    <>
      <div>
        <span
          className="cr-p px-3 me-2 arrange-text-lining position-relative"
          onClick={() => {
            setisSelected(!isSelected);
          }}
          id="lining"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <TextLining />
        </span>
        <ul className=" pb-2 text-center dropdown-menu" aria-labelledby="lining">
          <li className="cr-p">Text Style</li>
          <li className="cr-p">Text Style</li>
          <li className="cr-p">Text Style</li>
        </ul>
      </div>
    </>
  );
};

const SelectColor = (props) => {
  const { setColorRed, setColorBlue, setColorGreen } = props;
  const [isSelected, setisSelected] = useState(false);

  return (
    <>
      <div
        className="select-color select-color-box ms-2 cr-p me-4 position-relative"
        onClick={() => {
          setisSelected(!isSelected);
        }}
        id="selectcolor"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <ul className=" pb-2 text-center dropdown-menu" aria-labelledby="selectcolor">
          <li className="cr-p " onClick={() => setColorRed()}>
            Red
          </li>
          <li className="cr-p " onClick={() => setColorBlue()}>
            Blue
          </li>
          <li className="cr-p " onClick={() => setColorGreen()}>
            Green
          </li>
        </ul>
      </div>
    </>
  );
};
