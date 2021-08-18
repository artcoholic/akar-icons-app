import React from 'react';
import PropTypes from 'prop-types';

const CircleX = (props) => {
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
      className="ai ai-CircleX"
    >
      <path d="M15 15L9 9m6 0l-6 6"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

CircleX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleX.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CircleX;
