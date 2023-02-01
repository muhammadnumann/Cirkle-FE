import { IconProps } from './iconProps';

const ContactInformationIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={17} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.4 1.8H13.5V0.9C13.5 0.405 13.095 0 12.6 0C12.105 0 11.7 0.405 11.7 0.9V1.8H4.5V0.9C4.5 0.405 4.095 0 3.6 0C3.105 0 2.7 0.405 2.7 0.9V1.8H1.8C0.801 1.8 0 2.61 0 3.6V16.2C0 17.19 0.81 18 1.8 18H14.4C15.39 18 16.2 17.19 16.2 16.2V3.6C16.2 2.61 15.39 1.8 14.4 1.8ZM8.1 4.5C9.594 4.5 10.8 5.706 10.8 7.2C10.8 8.694 9.594 9.9 8.1 9.9C6.606 9.9 5.4 8.694 5.4 7.2C5.4 5.706 6.606 4.5 8.1 4.5ZM13.5 15.3H2.7V14.4C2.7 12.6 6.3 11.61 8.1 11.61C9.9 11.61 13.5 12.6 13.5 14.4V15.3Z"
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

export default ContactInformationIcon;
