import { IconProps } from './iconProps';

const JobIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 12.15v1.35c0 .54-.36.9-.9.9s-.9-.36-.9-.9v-1.35H6.3v1.35c0 .54-.36.9-.9.9s-.9-.36-.9-.9v-1.35H2.7c-.63 0-1.26-.18-1.8-.45v3.6c0 1.53 1.17 2.7 2.7 2.7h10.8c1.53 0 2.7-1.17 2.7-2.7v-3.6c-.54.27-1.17.45-1.8.45h-1.8Zm3.6-8.55h-3.6v-.9c0-1.53-1.17-2.7-2.7-2.7H7.2C5.67 0 4.5 1.17 4.5 2.7v.9H.9c-.54 0-.9.36-.9.9v3.6c0 1.53 1.17 2.7 2.7 2.7h12.6c1.53 0 2.7-1.17 2.7-2.7V4.5c0-.54-.36-.9-.9-.9Zm-5.4 0H6.3v-.9c0-.54.36-.9.9-.9h3.6c.54 0 .9.36.9.9v.9Z"
      fill={isSelected ? 'url(#a)' : '#8E9BAA'}
    />
    <defs>
      <linearGradient
        id="a"
        x1={2.769}
        y1={2.769}
        x2={14.334}
        y2={13.703}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default JobIcon;
