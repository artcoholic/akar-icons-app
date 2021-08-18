import React from 'react';
import PropTypes from 'prop-types';

const Truck = (props) => {
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
      className="ai ai-Truck"
    >
      <path d="M9 17h7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h1"></path>
      <path d="M22 16v-4a4 4 0 0 0-4-4h-2v9h5a1 1 0 0 0 1-1z"></path>
      <path d="M16 18a2 2 0 1 0 4 0v-1h-4v1z"></path>
      <path d="M22 14h-2"></path>
      <circle cx="6.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
};

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Truck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Truck;
