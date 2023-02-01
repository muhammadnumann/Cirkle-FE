import * as React from 'react';
import { SVGProps } from 'react';

type Props = Omit<SVGProps<SVGSVGElement>, 'onClick'> & {
  onClick: React.MouseEventHandler<SVGRectElement>;
  isBlue?: boolean;
};
const CollapseSidebarIcon = ({ isBlue, onClick, ...props }: Props) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={20} fill="#F5F5F9" /> /
    {isBlue ? (
      <circle cx={20} cy={20} r={13} fill="url(#sidebarcollapsedIcon)" />
    ) : (
      <circle cx={20} cy={20} r={13} fill="#0063da" />
    )}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m21.897 14-6.183 6 6.183 6 1.532-1.487L18.777 20l4.65-4.513L21.898 14Z"
      fill="#fff"
    />
    <rect
      className="btn"
      style={{
        fill: '#fff',
        fillOpacity: 0,
        stroke: '#fff',
        strokeOpacity: 0,
        cursor: 'pointer',
      }}
      x="0"
      y="0"
      width="40"
      height="40"
      onClick={onClick}
    />
    <defs>
      <linearGradient
        id="sidebarcollapsedIcon"
        x1={12}
        y1={11}
        x2={28.5}
        y2={30.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default CollapseSidebarIcon;
