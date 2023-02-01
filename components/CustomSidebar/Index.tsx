import CollapseSidebarIcon from 'components/icons/collapseSidebar';
import TimeEntries from 'components/icons/CustomSidebarIcons/timeEntries';
import TimeTracker from 'components/icons/CustomSidebarIcons/timetracker';
import Calender from 'components/icons/CustomSidebarIcons/calender';
import Dashboard from 'components/icons/CustomSidebarIcons/dashboard';
import Reports from 'components/icons/CustomSidebarIcons/reports';
import Projects from 'components/icons/CustomSidebarIcons/projects';
import { IconProps } from 'components/icons/iconProps';
import Logo from 'components/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import styles from './CustomSidebar.module.css';
import user from '/public/icons/user.png';
import Image from 'next/image';
import downArrow from '/public/icons/downArrow.svg';

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
    if (asPath === '/time-entries' && isDefault) {
      setIsSelected(true);
      return;
    }

    setIsSelected(asPath.startsWith(`/${description.toLowerCase().replace(/\s/g, '-')}`));
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
const CustomSidebar = (_props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div
        className={`${styles.sidebar}  position-relative
        ${!isCollapsed ? styles.expanded : styles.collapsed}`}
      >
        <div className={styles.sidebarHeader}>
          <Logo id={styles.logo} isCollapsed={isCollapsed} />
          <CollapseSidebarIcon id={styles.collapse} onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
        {isCollapsed ? '' : <section id={styles.more}>QUICK ACCESS</section>}
        <ul id="sidebar-items" className={styles.CustomSidebarItems}>
          <li>
            <SidebarItem
              IconComponent={TimeEntries}
              description="Time Entries"
              isCollapsed={isCollapsed}
              isDefault
            />
          </li>
          <li>
            <SidebarItem
              IconComponent={TimeTracker}
              description="Time Tracker"
              isCollapsed={isCollapsed}
            />
          </li>
          <li>
            <SidebarItem
              IconComponent={Calender}
              description="Calender"
              isCollapsed={isCollapsed}
            />
          </li>
        </ul>
        {isCollapsed ? '' : <section id={styles.more}>OVERVIEW</section>}
        <ul id={styles.sidebarMore} className={styles.CustomSidebarItems}>
          <li>
            <SidebarItem
              IconComponent={Dashboard}
              description="Dashboard"
              isCollapsed={isCollapsed}
            />
          </li>
          <li>
            <SidebarItem IconComponent={Reports} description="Reports" isCollapsed={isCollapsed} />
          </li>
          <li>
            <SidebarItem
              IconComponent={Projects}
              description="Projects"
              isCollapsed={isCollapsed}
            />
          </li>
        </ul>

        <div className=" ">
          {!isCollapsed ? (
            <>
              <div className="d-flex align-items-center user sidebarUser position-absolute bottom-0 mb-4">
                <div className="player mt-2">
                  <Image src={user} alt="Picture of the player" />
                </div>
                <div className="candidate-text ms-2">
                  <div className="font-weight-500 line-23 font-14 ">Angel Carter</div>
                  <div className="font-weight-500 line-23 font-12 text-lightgray ">Candidate</div>
                </div>
                <div className="ms-3">
                  <Image src={downArrow} alt="Picture" />
                </div>
              </div>
            </>
          ) : (
            <div className="player mx-3 position-absolute bottom-0 mb-5">
              <Image src={user} alt="Picture of the player" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomSidebar;
