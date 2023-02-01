import { IconProps } from '../iconProps';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DropIcon = ({ isSelected, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
    <path
      d="M11.9999 1.49606C12.0004 1.6241 11.9721 1.75061 11.9172 1.86629C11.8624 1.98198 11.7823 2.0839 11.6828 2.16457L6.54046 6.30417C6.3871 6.43023 6.19474 6.49915 5.99622 6.49915C5.7977 6.49915 5.60534 6.43023 5.45199 6.30417L0.309616 2.01886C0.134589 1.87339 0.0245216 1.66434 0.00362666 1.43771C-0.0172683 1.21108 0.052721 0.985434 0.198197 0.810407C0.343674 0.635381 0.552721 0.525314 0.779351 0.504419C1.00598 0.483524 1.23163 0.553513 1.40665 0.698989L6.00051 4.53006L10.5944 0.827549C10.7202 0.722745 10.8734 0.656171 11.0358 0.635705C11.1983 0.615238 11.3632 0.641736 11.5111 0.712063C11.6589 0.78239 11.7835 0.893602 11.8702 1.03254C11.9568 1.17148 12.0019 1.33233 11.9999 1.49606Z"
      fill={isSelected ? '#FFFFFF' : '#2B2B36'}
    />
  </svg>
);

export default DropIcon;
