import { FC } from 'react';

const CloseQuoteSvg: FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 16 20"
      height="max(4vw, 50px)"
      fill={color}>
      <g>
        <path d="M6,2H2C1.448,2,1,2.448,1,3v4c0,0.552,0.448,1,1,1h3c0,2.206-1.794,4-4,4v2c3.309,0,6-2.691,6-6V3C7,2.448,6.552,2,6,2z" />
        <path d="M14,2h-4C9.448,2,9,2.448,9,3v4c0,0.552,0.448,1,1,1h3c0,2.206-1.794,4-4,4v2c3.309,0,6-2.691,6-6V3   C15,2.448,14.552,2,14,2z" />
      </g>
    </svg>
  );
};

export default CloseQuoteSvg;
