import React from 'react';
import PropTypes from 'prop-types';

const FaceVerySad = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      className="ai ai-FaceVerySad"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 9.05v-.1"></path>
      <path d="M16 9.05v-.1"></path>
      <path d="M12 13a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z"></path>
    </svg>
  );
};

FaceVerySad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FaceVerySad;
