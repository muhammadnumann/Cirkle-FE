import { IconProps } from './iconProps';

const ActivityIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={19} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.772 2.269c-.036.225-.054.45-.054.675a3.658 3.658 0 0 0 3.654 3.662c.224 0 .44-.026.666-.062v7.262c0 3.052-1.8 4.86-4.86 4.86h-6.65c-3.061 0-4.861-1.808-4.861-4.86v-6.66c0-3.059 1.8-4.877 4.86-4.877h7.245Zm.18 5.472a.691.691 0 0 0-.63.279l-2.177 2.817L7.65 8.875a.71.71 0 0 0-.513-.144.697.697 0 0 0-.45.269l-2.663 3.466-.055.08a.673.673 0 0 0 .189.856.756.756 0 0 0 .414.135c.208.009.405-.1.53-.27l2.26-2.908 2.565 1.927.08.053a.673.673 0 0 0 .856-.19l2.6-3.355-.035.018a.674.674 0 0 0 .072-.675.664.664 0 0 0-.548-.396ZM16.498.667a2.17 2.17 0 0 1 0 4.338 2.17 2.17 0 0 1 0-4.338Z"
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

export default ActivityIcon;
