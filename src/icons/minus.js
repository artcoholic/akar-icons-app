import React from 'react';
import PropTypes from 'prop-types';

const Minus = (props) => {
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
      id="Minus"
    >
      <path d="M20 12H4"></path>
    </svg>
  );
};

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minus.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block',
};

export default Minus;
