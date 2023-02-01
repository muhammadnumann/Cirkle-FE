import { IconProps } from './iconProps';

enum Direction {
  UNSORTED,
  ASC,
  DESC,
}
type ListSortIconProps = IconProps & {
  direction: Direction;
};

const ListSortIcon = ({ ...props }: ListSortIconProps) => (
  <svg width={10} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.324.2c.006.007.009.016.015.024l4.271 4.72a.736.736 0 0 1-.007.966.572.572 0 0 1-.436.208H.623a.58.58 0 0 1-.442-.216l-.002.003a.735.735 0 0 1 0-.962L4.46.2a.568.568 0 0 1 .864 0Z"
      fill={props.direction == Direction.ASC ? 'url(#a)' : '#697A8D'}
    />
    <path
      d="M5.324 12.8c.006-.007.009-.016.015-.024L9.61 8.057a.736.736 0 0 0-.007-.967.572.572 0 0 0-.436-.208H.623a.58.58 0 0 0-.442.216L.18 7.095a.735.735 0 0 0 0 .962L4.46 12.8a.568.568 0 0 0 .864 0Z"
      fill={props.direction == Direction.DESC ? 'url(#a)' : '#697A8D'}
    />
    <defs>
      <linearGradient
        id="a"
        x1={1.883}
        y1={7.824}
        x2={5.136}
        y2={13.976}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset={1} stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default ListSortIcon;
