import React from 'react';
import PropTypes from 'prop-types';

const PanelLeft = (props) => {
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
      className="ai ai-PanelLeft"
    >
      <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      <path d="M9 3v18"></path>
    </svg>
  );
};

PanelLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PanelLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PanelLeft;
