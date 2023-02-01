import ActivityIcon from 'components/icons/activity';
import CompanyInformationIcon from 'components/icons/companyInformation';
import ForcastingIcon from 'components/icons/forcasting';
import { IconProps } from 'components/icons/iconProps';
import JobDetailIcon from 'components/icons/JobDetail';
import JobStatusIcon from 'components/icons/jobStatus';
import NotesIcon from 'components/icons/notes';
import Logo from 'components/logo';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styles from './jobSidebar.module.css';

type ItemProps = {
  isActive: boolean;
  IconComponent: FC<IconProps>;
  description: string;
};
export const JobSidebarItem: FC<ItemProps> = ({
  isActive,
  IconComponent,
  description,
}: ItemProps) => {
  return (
    <a className={`${styles.jobSidebarItem} `}>
      <div className={`${styles.jobSidebarRow} ${isActive && styles.jobSidebarActive}`}>
        <IconComponent className={styles.icon} isSelected={isActive} />
        {
          <div className={styles.sidebar_navigation_text}>
            <span className={`${styles.description} ${isActive && styles.isActiveText}`}>
              {description}
            </span>
          </div>
        }
      </div>
      {isActive && <div className={styles.selectedMarker} />}
    </a>
  );
};
const JobSidebar = (props) => {
  const { setTabCounter } = props;
  const router = useRouter();
  const contactid = router.query.id;
  return (
    <div className="position-relative">
      <div className={`${styles.jobSidebar}`}>
        <div className={styles.jobSidebarHeader}>
          <Logo id={styles.logo} isCollapsed={true} />
          <h2 className={styles.usertitle}>Alfonso Dokidis</h2>
          <p className={`${styles.userId} mb-1`}>ID : {contactid}</p>
          <div className={styles.progress}>IN PROGRESS</div>
        </div>

        <ul id="sidebar-items" className={styles.jobSidebarContainer}>
          <li onClick={() => setTabCounter(0)}>
            <JobSidebarItem
              isActive={props.tabCounter === 0}
              IconComponent={JobDetailIcon}
              description="Job Details"
            />
          </li>
          <li onClick={() => setTabCounter(1)}>
            <JobSidebarItem
              isActive={props.tabCounter === 1}
              IconComponent={JobStatusIcon}
              description="Job Status"
            />
          </li>
          <li onClick={() => setTabCounter(2)}>
            <JobSidebarItem
              isActive={props.tabCounter === 2}
              IconComponent={CompanyInformationIcon}
              description="Company Information"
            />
          </li>
          <li onClick={() => setTabCounter(3)}>
            <JobSidebarItem
              isActive={props.tabCounter === 3}
              IconComponent={ForcastingIcon}
              description="Forcasting"
            />
          </li>
          <li onClick={() => setTabCounter(4)}>
            <JobSidebarItem
              isActive={props.tabCounter === 4}
              IconComponent={ActivityIcon}
              description="Activity"
            />
          </li>
          <li onClick={() => setTabCounter(5)}>
            <JobSidebarItem
              isActive={props.tabCounter === 5}
              IconComponent={NotesIcon}
              description="Notes"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobSidebar;
