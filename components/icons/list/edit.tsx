import { SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.36.248a.846.846 0 0 0-1.195 0L8.969 1.444l3.588 3.587 1.195-1.196a.846.846 0 0 0 0-1.196L11.361.248Zm0 5.979L7.774 2.639.248 10.165a.846.846 0 0 0-.248.598v2.391c0 .467.379.846.846.846h2.391c.225 0 .44-.09.598-.248l7.526-7.525Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={2.692}
        y1={2.154}
        x2={11.577}
        y2={12.654}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default EditIcon;
