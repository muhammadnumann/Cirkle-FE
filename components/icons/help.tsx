import { IconProps } from './iconProps';

const HelpIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0Zm0 12.75A1.125 1.125 0 1 0 9 15a1.125 1.125 0 0 0 0-2.25Zm0-9a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 1 1 3 0c0 .556-.124.869-.549 1.346l-.174.188-.396.404c-.813.852-1.131 1.466-1.131 2.562a.75.75 0 0 0 1.5 0c0-.556.124-.869.549-1.346l.174-.188.396-.404C11.682 8.46 12 7.846 12 6.75a3 3 0 0 0-3-3Z"
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

export default HelpIcon;
