import { IconProps } from './iconProps';

const CommunicationIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={21} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.917 0a7.25 7.25 0 0 0-7.25 7.25c0 9 12 10.75 12 10.75v-3.5h.75a7.25 7.25 0 0 0 0-14.5h-5.5Zm2.75 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm5.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-9.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
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

export default CommunicationIcon;
