import { SVGProps } from 'react';

export interface PaginationArrowProps extends SVGProps<SVGSVGElement> {
  enabled?: boolean;
}

export interface PaginationPageProps extends SVGProps<SVGSVGElement> {
  selected: boolean;
  number: number;
}
