import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => {
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
      className="ai ai-Radio"
    >
      <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"></path>
    </svg>
  );
};

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radio.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Radio;
