import React from 'react';
import PropTypes from 'prop-types';

const TwoLineHorizontal = (props) => {
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
      id="TwoLineHorizontal"
    >
      <path d="M5 9h14M5 15h14"></path>
    </svg>
  );
};

TwoLineHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TwoLineHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block',
};

export default TwoLineHorizontal;
