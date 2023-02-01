import ActivityIcon from 'components/icons/activity';
import CommunicationIcon from 'components/icons/communication';
import CompanyInformationIcon from 'components/icons/companyInformation';
import ContactIcon from 'components/icons/contact';
import ContactInformationIcon from 'components/icons/contactinformation';
import GroupsIcon from 'components/icons/groups';
import { IconProps } from 'components/icons/iconProps';
import JobIcon from 'components/icons/jobs';
import NotesIcon from 'components/icons/notes';
import Logo from 'components/logo';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styles from './candidateSidebar.module.css';

type ItemProps = {
  isActive: boolean;
  IconComponent: FC<IconProps>;
  description: string;
};
export const CandidateSidebarItem: FC<ItemProps> = ({
  isActive,
  IconComponent,
  description,
}: ItemProps) => {
  return (
    <a className={`${styles.candidateSidebarItem} `}>
      <div className={`${styles.candidateSidebarRow} ${isActive && styles.candidateSidebarActive}`}>
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
const CandidateSidebar = ({ setTabNumber, tabNumber }) => {
  const router = useRouter();
  const contactid = router.query.id;
  return (
    <div className={`${styles.candidateSidebar}`}>
      <div className={styles.candidateSidebarHeader}>
        <Logo id={styles.logo} isCollapsed={true} />
        <h2 className={styles.usertitle}>Alfonso Dokidis</h2>
        <p className={`${styles.userId} mb-1`}>ID : {contactid}</p>
        <div className={styles.progress}>IN PROGRESS</div>
      </div>

      <ul id="sidebar-items" className={styles.candidateSidebarContainer}>
        <li onClick={() => setTabNumber(0)}>
          <CandidateSidebarItem
            isActive={tabNumber === 0}
            IconComponent={ContactIcon}
            description="General Information"
          />
        </li>
        <li onClick={() => setTabNumber(1)}>
          <CandidateSidebarItem
            isActive={tabNumber === 1}
            IconComponent={ContactInformationIcon}
            description="Contact Information"
          />
        </li>
        <li onClick={() => setTabNumber(2)}>
          <CandidateSidebarItem
            isActive={tabNumber === 2}
            IconComponent={CompanyInformationIcon}
            description="Onboarding"
          />
        </li>
        <li onClick={() => setTabNumber(3)}>
          <CandidateSidebarItem
            isActive={tabNumber === 3}
            IconComponent={JobIcon}
            description="Work Information"
          />
        </li>
        <li onClick={() => setTabNumber(4)}>
          <CandidateSidebarItem
            isActive={tabNumber === 4}
            IconComponent={ActivityIcon}
            description="Compensation"
          />
        </li>
        <li onClick={() => setTabNumber(5)}>
          <CandidateSidebarItem
            isActive={tabNumber === 5}
            IconComponent={NotesIcon}
            description="Files"
          />
        </li>
        <li onClick={() => setTabNumber(6)}>
          <CandidateSidebarItem
            isActive={tabNumber === 6}
            IconComponent={GroupsIcon}
            description="Applications"
          />
        </li>
        <li onClick={() => setTabNumber(7)}>
          <CandidateSidebarItem
            isActive={tabNumber === 7}
            IconComponent={ActivityIcon}
            description="Activity"
          />
        </li>
        <li onClick={() => setTabNumber(8)}>
          <CandidateSidebarItem
            isActive={tabNumber === 8}
            IconComponent={CommunicationIcon}
            description="Communication"
          />
        </li>
      </ul>
    </div>
  );
};

export default CandidateSidebar;
