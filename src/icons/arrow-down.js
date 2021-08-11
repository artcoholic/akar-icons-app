import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = (props) => {
  const { color, size, ...otherProps } = props;
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
      id="ArrowDown"
    >
      <path d="M12 20V4"></path>
      <path d="M5 13l7 7 7-7"></path>
    </svg>
  );
};

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDown.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block',
};

export default ArrowDown;
