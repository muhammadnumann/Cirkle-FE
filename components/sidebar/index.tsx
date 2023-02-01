import ActivityIcon from 'components/icons/activity';
import CandidateIcon from 'components/icons/candidate';
import CollapseSidebarIcon from 'components/icons/collapseSidebar';
import CommunicationIcon from 'components/icons/communication';
import ContactIcon from 'components/icons/contact';
import DashboardIcon from 'components/icons/dashboard';
import HelpIcon from 'components/icons/help';
import { IconProps } from 'components/icons/iconProps';
import JobIcon from 'components/icons/jobs';
import SettingsIcon from 'components/icons/settings';
import Logo from 'components/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

type ItemProps = {
  IconComponent: FC<IconProps>;
  description: string;
  isCollapsed: boolean;
  isDefault?: boolean;
};
export const SidebarItem: FC<ItemProps> = ({
  IconComponent,
  description,
  isCollapsed,
  isDefault,
}: ItemProps) => {
  const { asPath } = useRouter();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (asPath === '/' && isDefault) {
      setIsSelected(true);
      return;
    }
    setIsSelected(asPath.startsWith(`/${description.toLowerCase()}`));
  }, [asPath, setIsSelected, description, isDefault]);

  return (
    <Link href={`/${description.toLowerCase().replace(/\s/g, '-')}`}>
      <a className={`${styles.sidebarRow} ${isSelected ? styles.isSelected : ''}`}>
        {isSelected && isCollapsed && <div id={styles.invisible} />}
        <div className={`${styles.sidebarItem} ${isSelected ? styles.isSelected : ''}`}>
          <IconComponent className={styles.icon} isSelected={isSelected} />
          {!isCollapsed && <span className={styles.description}>{description}</span>}
        </div>
        {isSelected && <div className={styles.selectedMarker} />}
      </a>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = (_props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${styles.sidebar} 
        ${!isCollapsed ? styles.expanded : styles.collapsed}`}
    >
      <div className={styles.sidebarHeader}>
        <Logo id={styles.logo} isCollapsed={isCollapsed} />
        <CollapseSidebarIcon
          isBlue={true}
          id={styles.collapse}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      <ul id="sidebar-items" className={styles.sidebarContainer}>
        <li>
          <SidebarItem
            IconComponent={DashboardIcon}
            description="Dashboard"
            isCollapsed={isCollapsed}
            isDefault
          />
        </li>
        <li>
          <SidebarItem
            IconComponent={ContactIcon}
            description="Contacts"
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <SidebarItem IconComponent={JobIcon} description="Jobs" isCollapsed={isCollapsed} />
        </li>
        <li>
          <SidebarItem
            IconComponent={CandidateIcon}
            description="Candidates"
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <SidebarItem
            IconComponent={ActivityIcon}
            description="Activity"
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <SidebarItem
            IconComponent={CommunicationIcon}
            description="Communication"
            isCollapsed={isCollapsed}
          />
        </li>
      </ul>
      <ul id={styles.sidebarMore} className={styles.sidebarContainer}>
        <section id={styles.more}>MORE</section>
        <li>
          <SidebarItem
            IconComponent={SettingsIcon}
            description="setting"
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <SidebarItem
            IconComponent={HelpIcon}
            description="Help Center"
            isCollapsed={isCollapsed}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
