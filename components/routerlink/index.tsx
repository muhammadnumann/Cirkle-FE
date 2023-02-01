import { IconProps } from 'components/icons/iconProps';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState, useEffect } from 'react';
import styles from '../contacts/contactssidebar.module.css';

type ItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id?: any;
  routelink: string;
  IconComponent: FC<IconProps>;
  description: string;
  isCollapsed: boolean;
  isDefault?: boolean;
};
const ContactSidebarItem: FC<ItemProps> = ({
  id,
  routelink,
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
    setIsSelected(asPath.startsWith(`./${description.toLowerCase()}`));
  }, [asPath, setIsSelected, description, isDefault]);
  return (
    <Link href={`/contacts/${id}/${routelink.toLowerCase()}`}>
      <a className={`${styles.coontactsidebarRow} ${isSelected ? styles.isSelected : ''}`}>
        {isSelected && isCollapsed && <div id={styles.invisible} />}
        <div className={`${styles.contactsidebarItem} ${isSelected ? styles.isSelected : ''}`}>
          <IconComponent className={styles.icon} isSelected={isSelected} />
          {!isCollapsed && <span className={styles.description}>{description}</span>}
        </div>
        {isSelected && <div className={styles.selectedMarker} />}
      </a>
    </Link>
  );
};

export default ContactSidebarItem;
