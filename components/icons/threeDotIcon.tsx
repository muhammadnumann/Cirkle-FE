import { forwardRef, SVGProps } from 'react';

const ThreeDotIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      width="3"
      height="17"
      viewBox="0 0 3 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M0 8.21977C0 9.03894 0.679246 9.71687 1.5 9.71687C2.32076 9.71687 3 9.03894 3 8.21977C3 7.40059 2.32076 6.72266 1.5 6.72266C0.679246 6.72266 0 7.40059 0 8.21977Z"
        fill="#212121"
      />
      <path
        d="M0 1.4971C0 2.31627 0.679246 2.99421 1.5 2.99421C2.32076 2.99421 3 2.31627 3 1.4971C3 0.677934 2.32076 0 1.5 0C0.679246 0 0 0.677934 0 1.4971Z"
        fill="#212121"
      />
      <path
        d="M0 14.914C0 15.7332 0.679246 16.4394 1.5 16.4394C2.32076 16.4394 3 15.7614 3 14.914C3 14.0949 2.32076 13.3887 1.5 13.3887C0.679246 13.4169 0 14.0949 0 14.914Z"
        fill="#212121"
      />
    </svg>
  );
});
ThreeDotIcon.displayName = 'ThreeDotIcon';

export default ThreeDotIcon;
