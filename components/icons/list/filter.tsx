import { SVGProps } from 'react';

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.6 0H2.4A2.4 2.4 0 0 0 0 2.4v.936c0 .33.068.657.2.96v.048c.113.257.273.49.472.688L5.6 9.928V15.2a.8.8 0 0 0 .8.8.8.8 0 0 0 .36-.088l3.2-1.6a.8.8 0 0 0 .44-.712V9.928l4.896-4.896c.199-.198.359-.431.472-.688v-.048a2.4 2.4 0 0 0 .232-.96V2.4A2.4 2.4 0 0 0 13.6 0ZM9.032 9.032A.8.8 0 0 0 8.8 9.6v3.504l-1.6.8V9.6a.8.8 0 0 0-.232-.568L2.728 4.8h10.544l-4.24 4.232ZM14.4 3.2H1.6v-.8a.8.8 0 0 1 .8-.8h11.2a.8.8 0 0 1 .8.8v.8Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.077}
        y1={2.462}
        x2={13.231}
        y2={14.461}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default FilterIcon;
