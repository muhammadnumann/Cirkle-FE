import { IconProps } from './iconProps';

const EmailIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={20} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17 0.333008H3C2.20435 0.333008 1.44129 0.649078 0.87868 1.21169C0.316071 1.7743 0 2.53736 0 3.33301V13.333C0 14.1287 0.316071 14.8917 0.87868 15.4543C1.44129 16.0169 2.20435 16.333 3 16.333H17C17.7956 16.333 18.5587 16.0169 19.1213 15.4543C19.6839 14.8917 20 14.1287 20 13.333V3.33301C20 2.53736 19.6839 1.7743 19.1213 1.21169C18.5587 0.649078 17.7956 0.333008 17 0.333008ZM17 2.33301L10.5 6.80301C10.348 6.89078 10.1755 6.93698 10 6.93698C9.82446 6.93698 9.65202 6.89078 9.5 6.80301L3 2.33301H17Z"
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

export default EmailIcon;
