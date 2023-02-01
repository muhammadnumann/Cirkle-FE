import { IconProps } from './iconProps';

const ShapeIcon = ({ isSelected }: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="h ttp://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H1C0.448 0 0 0.448 0 1V7C0 7.552 0.448 8 1 8H7C7.552 8 8 7.552 8 7V1C8 0.448 7.552 0 7 0ZM6 6H2V2H6V6ZM11 8H17C17.553 8 18 7.552 18 7V1C18 0.448 17.553 0 17 0H11C10.447 0 10 0.448 10 1V7C10 7.552 10.447 8 11 8ZM12 2H16V6H12V2ZM0 17C0 17.552 0.448 18 1 18H7C7.552 18 8 17.552 8 17V11C8 10.448 7.552 10 7 10H1C0.448 10 0 10.448 0 11V17ZM2 12H6V16H2V12ZM10 17C10 17.552 10.447 18 11 18H17C17.553 18 18 17.552 18 17V11C18 10.448 17.553 10 17 10H11C10.447 10 10 10.448 10 11V17ZM12 12H16V16H12V12Z"
      fill={isSelected ? 'url(#a)' : '#8E9BAA'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H1C0.448 0 0 0.448 0 1V7C0 7.552 0.448 8 1 8H7C7.552 8 8 7.552 8 7V1C8 0.448 7.552 0 7 0ZM6 6H2V2H6V6ZM11 8H17C17.553 8 18 7.552 18 7V1C18 0.448 17.553 0 17 0H11C10.447 0 10 0.448 10 1V7C10 7.552 10.447 8 11 8ZM12 2H16V6H12V2ZM0 17C0 17.552 0.448 18 1 18H7C7.552 18 8 17.552 8 17V11C8 10.448 7.552 10 7 10H1C0.448 10 0 10.448 0 11V17ZM2 12H6V16H2V12ZM10 17C10 17.552 10.447 18 11 18H17C17.553 18 18 17.552 18 17V11C18 10.448 17.553 10 17 10H11C10.447 10 10 10.448 10 11V17ZM12 12H16V16H12V12Z"
      fill={isSelected ? 'url(#a)' : '#8E9BAA'}
      fillOpacity="0.2"
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

export default ShapeIcon;
