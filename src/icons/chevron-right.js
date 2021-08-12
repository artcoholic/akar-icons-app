import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = (props) => {
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
      className="ai-ChevronRight"
    >
      <path d="M8 4l8 8-8 8"></path>
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ChevronRight;
