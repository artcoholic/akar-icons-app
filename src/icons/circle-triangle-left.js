import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleLeft = (props) => {
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
      id="CircleTriangleLeft"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12l6-4v8l-6-4z"></path>
    </svg>
  );
};

CircleTriangleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleTriangleLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block',
};

export default CircleTriangleLeft;
