import { IconProps } from './iconProps';

const SettingsIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={18} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.53.668c.495-.01.963.17 1.314.513.351.332.54.792.54 1.278 0 .99.819 1.792 1.836 1.792.314 0 .63-.091.91-.244.871-.47 1.96-.171 2.455.666l.613 1.053c.153.27.242.576.242.89 0 .64-.35 1.235-.917 1.549-.28.153-.514.387-.675.658a1.764 1.764 0 0 0 .675 2.402 1.78 1.78 0 0 1 .675 2.43l-.613 1.018c-.324.556-.927.9-1.575.9a1.79 1.79 0 0 1-.917-.245 1.973 1.973 0 0 0-.918-.242c-.487 0-.955.19-1.296.53-.351.334-.54.793-.54 1.27 0 .98-.819 1.782-1.836 1.782H8.27c-.486 0-.945-.198-1.278-.531a1.77 1.77 0 0 1-.522-1.26c0-.99-.81-1.791-1.826-1.791-.334 0-.658.09-.937.261a1.934 1.934 0 0 1-1.395.18 1.878 1.878 0 0 1-1.116-.837L.62 13.673a1.754 1.754 0 0 1-.225-1.404c.125-.477.45-.882.89-1.125.28-.153.513-.378.675-.657a1.781 1.781 0 0 0-.675-2.403A1.752 1.752 0 0 1 .62 5.68l.575-1.008a1.834 1.834 0 0 1 1.125-.855 1.86 1.86 0 0 1 1.404.189c.288.153.603.234.919.234a1.86 1.86 0 0 0 1.295-.522c.342-.333.531-.792.531-1.26 0-.99.819-1.791 1.836-1.791H9.53ZM9.89 7.4a2.567 2.567 0 0 0-2.763.53 2.426 2.426 0 0 0-.55 2.692 2.515 2.515 0 0 0 2.332 1.529h.01a2.474 2.474 0 0 0 1.78-.72 2.425 2.425 0 0 0 .748-1.746A2.452 2.452 0 0 0 9.89 7.4Z"
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

export default SettingsIcon;
