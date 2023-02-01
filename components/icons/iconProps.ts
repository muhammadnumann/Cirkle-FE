import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  isSelected?: boolean;
  ClassName?: string;
}
