import Image from 'next/future/image';
import logoOnly from '../public/images/logo.png';
import logoWithText from '../public/images/logo-cirkle-ai.png';
import { FC } from 'react';

type Props = {
  id?: string;
  className?: string;
  isCollapsed?: boolean;
};
const Logo: FC<Props> = ({ id, className, isCollapsed }) => {
  return (
    <Image
      src={isCollapsed ? logoOnly : logoWithText}
      alt=""
      className={className ? className : ''}
      id={id ? id : ''}
      priority
    />
  );
};

export default Logo;
