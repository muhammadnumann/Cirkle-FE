import React from 'react';
import styles from './timeline.module.css';

interface CTimeline {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface DateHeading {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface IconCircle {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface DetailDate {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface Sender {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
interface Content {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
}
export const CTimeline: React.FC<CTimeline> = ({ children, id, ClassName }) => {
  return (
    <>
      <div
        className={`${ClassName} font-poppin border-start border-darkgray mt-3 ps-3 timeline-main`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};
export const DateHeading: React.FC<DateHeading> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div
          className={`${ClassName} date-heading-main position-relative text-uppercase mb-4`}
          id={id}
        >
          <div
            className={`${styles.dateHeadingCircle} date-heading-circle bg-gradient-purple`}
          ></div>
          <div
            className={`${styles.dateHeading} date-heading text-gradient-purple font-weight-700 font-18`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export const IconCircle: React.FC<IconCircle> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div
          className={`${ClassName} ${styles.iconCircle} icon-circle-timeline Com-rounded`}
          id={id}
        >
          {children}
        </div>
      )}
    </>
  );
};
export const DetailDate: React.FC<DetailDate> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div className={`${ClassName} date-detail-main position-relative mb-3`} id={id}>
          <div className={`${styles.dateDetailCircle} date-detail-circle bg-darkgray`}></div>
          <div className={`${styles.dateDetail} date-detail text-darkgray font-weight-500 font-16`}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export const Sender: React.FC<Sender> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div className={`${ClassName} date-detail-main position-relative`} id={id}>
          <div className={`${styles.dateDetail} date-detail text-black font-weight-500 font-16`}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export const Content: React.FC<Content> = ({ children, id, ClassName }) => {
  return (
    <>
      {children && (
        <div
          className={`${ClassName} ${styles.dateDetail} content-detail-main text-black mt-1 font-weight-300 font-16`}
          id={id}
        >
          {children}
        </div>
      )}
    </>
  );
};
