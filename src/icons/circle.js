import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
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
      className="ai-Circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Circle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Circle;
