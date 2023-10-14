import { FC } from 'react';

const OpenQuoteSvg: FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 16 20"
      height="max(4vw, 50px)"
      fill={color}>
      <g>
        <path d="M10,14h4c0.552,0,1-0.448,1-1V9c0-0.552-0.448-1-1-1h-3c0-2.206,1.794-4,4-4V2c-3.309,0-6,2.691-6,6v5   C9,13.552,9.448,14,10,14z" />
        <path d="M2,14h4c0.552,0,1-0.448,1-1V9c0-0.552-0.448-1-1-1H3c0-2.206,1.794-4,4-4V2C3.691,2,1,4.691,1,8v5C1,13.552,1.448,14,2,14   z" />
      </g>
    </svg>
  );
};

export default OpenQuoteSvg;
