import { IconProps } from './iconProps';

const CandidateIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={15} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.24 9.36a2.16 2.16 0 0 1 2.16 2.16v.72c0 2.839-2.678 5.76-7.2 5.76S0 15.079 0 12.24v-.72a2.16 2.16 0 0 1 2.16-2.16h10.08ZM7.2 0a3.96 3.96 0 1 1 0 7.92A3.96 3.96 0 0 1 7.2 0Z"
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

export default CandidateIcon;
