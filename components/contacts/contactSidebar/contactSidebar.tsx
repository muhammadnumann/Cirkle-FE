import Logo from 'components/logo';
import JobIcon from 'components/icons/jobs';
import ContactIcon from 'components/icons/contact';
import NotesIcon from 'components/icons/notes';
import ActivityIcon from 'components/icons/activity';
import CommunicationIcon from 'components/icons/communication';
import CompanyContactIcon from 'components/icons/companycontacts';
import ContactInformationIcon from 'components/icons/contactinformation';
import EmailIcon from 'components/icons/email';
import GroupsIcon from 'components/icons/groups';
import { IconProps } from 'components/icons/iconProps';
import React, { FC } from 'react';
import styles from './contactSidebar.module.css';
import { useRouter } from 'next/router';

type ItemProps = {
  IconComponent: FC<IconProps>;
  description: string;
  isActive: boolean;
};
const ContactSidebarItem: FC<ItemProps> = ({ isActive, IconComponent, description }: ItemProps) => {
  return (
    <a className={`${styles.contactSidebarItem} `}>
      <div className={`${styles.contactSidebarRow} ${isActive && styles.contactSidebarActive}`}>
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

const ContactSidebar = (props) => {
  const { setTabCounter } = props;
  const router = useRouter();
  const contactid = router.query.id;

  return (
    <div className="position-relative">
      <div className={`${styles.contactSidebar}`}>
        <div className={styles.contactSidebarHeader}>
          <Logo id={styles.logo} isCollapsed={true} />
          <h2 className={`${styles.usertitle} pt-2`}>Alfonso Dokidis</h2>
          <p className={styles.userId}>ID : {contactid}</p>
        </div>

        <ul id="sidebar-items" className={styles.contactSidebarContainer}>
          <li onClick={() => setTabCounter(0)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 0}
              IconComponent={ContactIcon}
              description="General Information"
            />
          </li>
          <li onClick={() => setTabCounter(1)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 1}
              IconComponent={JobIcon}
              description="Work Information"
            />
          </li>
          <li onClick={() => setTabCounter(2)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 2}
              IconComponent={ContactInformationIcon}
              description="Contact Information"
            />
          </li>
          <li onClick={() => setTabCounter(3)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 3}
              IconComponent={CompanyContactIcon}
              description="Company Contacts"
            />
          </li>
          <li onClick={() => setTabCounter(4)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 4}
              IconComponent={EmailIcon}
              description="Email Permission"
            />
          </li>
          <li onClick={() => setTabCounter(5)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 5}
              IconComponent={GroupsIcon}
              description="Groups"
            />
          </li>
          <li onClick={() => setTabCounter(6)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 6}
              IconComponent={ActivityIcon}
              description="Activity"
            />
          </li>
          <li onClick={() => setTabCounter(7)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 7}
              IconComponent={CommunicationIcon}
              description="Communication"
            />
          </li>
          <li onClick={() => setTabCounter(8)}>
            <ContactSidebarItem
              isActive={props.tabCounter === 8}
              IconComponent={NotesIcon}
              description="Notes"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSidebar;
