import { IconProps } from './iconProps';

const ContactIcon = ({ isSelected, ...props }: IconProps) => (
  <svg width={15} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.24 9.36a2.16 2.16 0 0 1 2.16 2.16v.72c0 2.839-2.678 5.76-7.2 5.76S0 15.079 0 12.24v-.72a2.16 2.16 0 0 1 2.16-2.16h10.08ZM7.2 0a3.96 3.96 0 1 1 0 7.92A3.96 3.96 0 0 1 7.2 0Z"
      fill={isSelected ? 'url(#a)' : '#8E9BAA'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.97 12.39h-.94a.64.64 0 0 0-.608.447l-.398 1.326a.58.58 0 0 0 .16.59l.87 1.072a.657.657 0 0 0 .892.001l.869-1.07a.575.575 0 0 0 .16-.586l-.398-1.333a.638.638 0 0 0-.606-.447m.564-1.084.105-.604c.064-.364-.233-.702-.623-.702H6.983c-.39 0-.687.345-.623.709l.105.591c.051.288.314.493.623.493h.824c.309 0 .572-.198.622-.486"
      fill="#fff"
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

export default ContactIcon;
