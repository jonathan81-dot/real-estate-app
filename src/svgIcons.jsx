import React from 'react';

export const ArrowLeftIcon = ({ size = 20, strokeWidth = 2, className, ...props }) => (
  <svg
    xmlns="http://w3.org"
    viewBox="6 -1 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ArrowRightIcon = ({ size = 20, strokeWidth = 2, className, ...props }) => (
  <svg
    xmlns="http://w3.org"
    viewBox="-6 -2 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
