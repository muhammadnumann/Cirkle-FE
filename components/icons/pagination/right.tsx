import OpacityWrapper from './opacityWrapper';
import { PaginationArrowProps } from './props';

const PaginationRightIcon = ({ enabled, ...props }: PaginationArrowProps) => (
  <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <OpacityWrapper showOpacity={!enabled}>
      <path
        d="M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
        fill={enabled ? '#fff' : '#697A8D'}
      />
      <path
        d="M11.84 11.41 16.42 16l-4.58 4.59L13.25 22l6-6-6-6-1.41 1.41Z"
        fill={enabled ? 'url(#a)' : '#fff'}
      />
    </OpacityWrapper>
    <defs>
      <linearGradient
        id="a"
        x1={12.98}
        y1={12.308}
        x2={20.471}
        y2={16.222}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default PaginationRightIcon;
