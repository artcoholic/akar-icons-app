import React from 'react';
import PropTypes from 'prop-types';

const PersonCross = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      className="ai ai-PersonCross"
    >
      <circle cx="12" cy="7" r="5"></circle>
      <path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"></path>
      <path d="M21 18l-3-3m3 0l-3 3"></path>
    </svg>
  );
};

PersonCross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PersonCross;
