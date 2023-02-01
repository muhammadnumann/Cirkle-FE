import { IconProps } from './iconProps';

const ForcastingIcon = ({ isSelected, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" {...props}>
    <path
      d="M17.1 16.8665H16.2V6.0665C16.201 5.88774 16.1488 5.71272 16.05 5.56375C15.9512 5.41478 15.8102 5.29862 15.6451 5.23007C15.48 5.16152 15.2983 5.14369 15.123 5.17885C14.9477 5.21402 14.7869 5.30058 14.661 5.4275L9.9 10.1975L6.939 7.2275C6.77994 7.06816 6.56693 6.97422 6.342 6.96422C6.11707 6.95423 5.89657 7.0289 5.724 7.1735L1.8 10.4405V8.2805L6.246 4.5815L9.261 7.5965C9.42963 7.76413 9.65773 7.85822 9.8955 7.85822C10.1333 7.85822 10.3614 7.76413 10.53 7.5965L15.93 2.1965C16.0774 2.02433 16.1545 1.80286 16.1457 1.57636C16.137 1.34985 16.0431 1.13498 15.8828 0.974697C15.7225 0.814412 15.5077 0.720513 15.2811 0.711764C15.0546 0.703015 14.8332 0.78006 14.661 0.927504L9.9 5.6975L6.939 2.7275C6.77994 2.56816 6.56693 2.47422 6.342 2.46422C6.11707 2.45423 5.89657 2.5289 5.724 2.6735L1.8 5.9405V1.5665C1.8 1.32781 1.70518 1.09889 1.5364 0.930108C1.36761 0.761325 1.13869 0.666504 0.9 0.666504C0.661305 0.666504 0.432387 0.761325 0.263604 0.930108C0.0948211 1.09889 0 1.32781 0 1.5665V17.7665C0 18.0052 0.0948211 18.2341 0.263604 18.4029C0.432387 18.5717 0.661305 18.6665 0.9 18.6665H17.1C17.3387 18.6665 17.5676 18.5717 17.7364 18.4029C17.9052 18.2341 18 18.0052 18 17.7665C18 17.5278 17.9052 17.2989 17.7364 17.1301C17.5676 16.9613 17.3387 16.8665 17.1 16.8665Z"
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

export default ForcastingIcon;