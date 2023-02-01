import { forwardRef, SVGProps } from 'react';

const ListActionsIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg width={18} height={4} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={3.462}
          y1={0.615}
          x2={4.396}
          y2={5.588}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E0674" />
          <stop offset={1} stopColor="#4660AF" />
        </linearGradient>
      </defs>
    </svg>
  );
});
ListActionsIcon.displayName = 'ListActionsIcon';

export default ListActionsIcon;
