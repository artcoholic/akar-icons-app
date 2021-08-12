import React from 'react';
import PropTypes from 'prop-types';

const ThreeLineHorizontal = (props) => {
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
      className="ai-ThreeLineHorizontal"
    >
      <path d="M5 6h14M5 12h14M5 18h14"></path>
    </svg>
  );
};

ThreeLineHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThreeLineHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ThreeLineHorizontal;
