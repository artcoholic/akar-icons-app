import React from 'react';
import PropTypes from 'prop-types';

const CircleChevronUp = (props) => {
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
      className="ai ai-CircleChevronUp"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 13.5l4-4 4 4"></path>
    </svg>
  );
};

CircleChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleChevronUp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CircleChevronUp;
