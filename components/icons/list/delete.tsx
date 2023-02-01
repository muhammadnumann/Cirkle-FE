import { SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.3 2.8H9.8V1.633A1.694 1.694 0 0 0 8.05 0h-2.1a1.694 1.694 0 0 0-1.75 1.63v1.17H.7a.7.7 0 0 0 0 1.4h.7v7.7A2.1 2.1 0 0 0 3.5 14h7a2.1 2.1 0 0 0 2.1-2.1V4.2h.7a.7.7 0 1 0 0-1.4Zm-7.7 7a.7.7 0 1 1-1.4 0V7a.7.7 0 0 1 1.4 0v2.8Zm0-8.168c0-.112.147-.231.35-.231h2.1c.202 0 .35.119.35.23v1.17H5.6V1.63ZM9.8 9.8a.7.7 0 1 1-1.4 0V7a.7.7 0 0 1 1.4 0v2.8Z"
      fill="#FF3E1D"
    />
  </svg>
);

export default DeleteIcon;
