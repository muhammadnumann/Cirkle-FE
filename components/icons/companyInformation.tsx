import { IconProps } from './iconProps';

const CompanyInformationIcon = ({ isSelected, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <path
      d="M18.9813 16.2867H18.1801V3.90752C18.1928 3.70319 18.1451 3.49937 18.0432 3.32172C17.9411 3.14408 17.7893 3.0003 17.6064 2.90806L16.9344 2.65703L15.3394 2.03536L13.5173 1.31795L11.8794 0.686633L10.2391 0.0457898L10.1937 0.0337803L10.1507 0.0217709C10.0556 -0.000746558 9.95638 -0.000746558 9.86131 0.0217709L9.81828 0.0337803L9.76073 0.0457898L2.38642 2.9152C2.20594 3.00794 2.05649 3.15105 1.95575 3.32718C1.85517 3.50349 1.80797 3.70498 1.81981 3.90748V16.2867H1.01867C0.654716 16.2867 0.318469 16.4808 0.136481 16.7959C-0.0454938 17.1112 -0.0454938 17.4995 0.136481 17.8147C0.318457 18.1298 0.654733 18.3239 1.01867 18.3239H18.9813C19.3453 18.3239 19.6815 18.1298 19.8635 17.8147C20.0455 17.4995 20.0455 17.1111 19.8635 16.7959C19.6815 16.4808 19.3452 16.2867 18.9813 16.2867ZM9.19398 14.5412L3.43373 14.6918V13.257L9.19398 12.805V14.5412ZM9.19398 11.074L3.4333 11.8271V10.3923L9.19355 9.33778L9.19398 11.074ZM9.19398 7.60676L3.4333 8.96484V7.53003L9.19355 5.87523L9.19398 7.60676ZM9.19398 4.13955L3.4333 6.10026V4.69414L9.19355 2.45123L9.19398 4.13955Z"
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

export default CompanyInformationIcon;
